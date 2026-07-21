// Feature: izaura-landing-page, Property 9: Animasi dihormati prefers-reduced-motion
// Validates: Requirements 7.5
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

describe('Property 9: prefers-reduced-motion support in CSS', () => {
  it('style.css contains @media (prefers-reduced-motion: reduce) block', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    expect(css).toMatch(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/);
  });

  it('reduced-motion block sets animation-duration to 0s', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    const startIdx = css.search(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/);
    expect(startIdx).toBeGreaterThan(-1);
    const openBrace = css.indexOf('{', startIdx);
    let depth = 0;
    let endIdx = openBrace;
    for (let i = openBrace; i < css.length; i++) {
      if (css[i] === '{') depth++;
      else if (css[i] === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
    }
    const block = css.slice(openBrace, endIdx);
    expect(block).toMatch(/animation-duration\s*:\s*0s/);
  });

  it('reduced-motion block sets transition-duration to 0s', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    const startIdx = css.search(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/);
    const openBrace = css.indexOf('{', startIdx);
    let depth = 0;
    let endIdx = openBrace;
    for (let i = openBrace; i < css.length; i++) {
      if (css[i] === '{') depth++;
      else if (css[i] === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
    }
    const block = css.slice(openBrace, endIdx);
    expect(block).toMatch(/transition-duration\s*:\s*0s/);
  });

  it('.fade-in-section starts hidden (opacity: 0) before JS adds .visible', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    expect(css).toMatch(/\.fade-in-section\s*\{[^}]*opacity\s*:\s*0/s);
  });

  it('.fade-in-section.visible restores opacity to 1', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    expect(css).toMatch(/\.fade-in-section\.visible\s*\{[^}]*opacity\s*:\s*1/s);
  });

  it('.fade-in-section has a transition property', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    const sectionBlock = css.match(/\.fade-in-section\s*\{([^}]*)\}/s);
    expect(sectionBlock).not.toBeNull();
    expect(sectionBlock[1]).toMatch(/transition/);
  });
});
