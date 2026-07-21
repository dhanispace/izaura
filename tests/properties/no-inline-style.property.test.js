// Feature: izaura-landing-page, Property 10: Tidak ada inline style di HTML
// Validates: Requirements 8.1, 8.2
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';
import { parse } from 'parse5';

function getAllElements(node, elements = []) {
  if (node.nodeName && node.nodeName !== '#document' && node.nodeName !== '#text' && node.nodeName !== '#comment') {
    elements.push(node);
  }
  if (node.childNodes) {
    node.childNodes.forEach(child => getAllElements(child, elements));
  }
  return elements;
}

function getBodyNode(document) {
  function findBody(node) {
    if (node.nodeName === 'body') return node;
    if (node.childNodes) {
      for (const child of node.childNodes) {
        const found = findBody(child);
        if (found) return found;
      }
    }
    return null;
  }
  return findBody(document);
}

describe('Property 10: No inline styles in HTML source', () => {
  it('no element in <body> has a style attribute in the HTML source file', () => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
    const document = parse(html);
    const body = getBodyNode(document);
    expect(body, '<body> element not found').not.toBeNull();

    const allElements = getAllElements(body);
    const withStyle = allElements.filter(el =>
      el.attrs && el.attrs.some(attr => attr.name === 'style')
    );

    expect(
      withStyle,
      `Found ${withStyle.length} element(s) with inline style in source HTML: ${
        withStyle.map(el => '<' + el.nodeName + '>').join(', ')
      }. Note: JS runtime adds style="display:none" for placeholders — those are NOT in source HTML.`
    ).toHaveLength(0);
  });

  it('no <style> element exists anywhere in the HTML document', () => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
    const document = parse(html);

    function findStyleTags(node, found = []) {
      if (node.nodeName === 'style') found.push(node);
      if (node.childNodes) node.childNodes.forEach(c => findStyleTags(c, found));
      return found;
    }

    const styleTags = findStyleTags(document);
    expect(styleTags, 'Found <style> tag(s) in HTML document').toHaveLength(0);
  });

  it('CSS is in a separate style.css file linked via <link> tag', () => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
    expect(html).toContain('href="style.css"');
  });
});
