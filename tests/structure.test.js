// Feature: izaura-landing-page | Unit tests: DOM structure
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { beforeAll, describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

let dom, document;

beforeAll(() => {
  const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
  dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
  document = dom.window.document;
});

describe('Structure — Section order and presence', () => {
  it('has meta viewport tag', () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).not.toBeNull();
    expect(viewport.getAttribute('content')).toContain('width=device-width');
  });

  it('#hero is the first section on the page', () => {
    const sections = document.querySelectorAll('section');
    expect(sections[0].id).toBe('hero');
  });

  it('<h1> exists inside #hero', () => {
    const h1 = document.querySelector('#hero h1');
    expect(h1).not.toBeNull();
  });

  it('all required sections exist in the DOM', () => {
    expect(document.querySelector('#hero')).not.toBeNull();
    expect(document.querySelector('#black-garlic')).not.toBeNull();
    expect(document.querySelector('#contact')).not.toBeNull();
    expect(document.querySelector('#location')).not.toBeNull();
  });
});
