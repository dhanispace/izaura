// Feature: izaura-landing-page, Property 6: Font konsisten di semua elemen teks
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Property 6: Font consistency across all text elements', () => {
  it('style.css defines --font-primary as Poppins with sans-serif fallback', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    expect(css).toMatch(/--font-primary\s*:\s*['"]?Poppins['"]?\s*,\s*sans-serif/);
  });

  it('global font-family rule uses var(--font-primary)', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    expect(css).toMatch(/font-family\s*:\s*var\(--font-primary\)/);
  });

  it('no text element in HTML has inline font-family override', () => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
    const dom = new JSDOM(html);
    const textEls = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, address');
    textEls.forEach(el => {
      const style = el.getAttribute('style') || '';
      expect(style).not.toMatch(/font-family/);
    });
  });
});
