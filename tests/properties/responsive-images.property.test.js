// Feature: izaura-landing-page, Property 5: Gambar responsif tidak melebihi container
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Property 5: Responsive images — max-width:100% and height:auto in CSS', () => {
  it('style.css declares max-width:100% and height:auto for img elements', () => {
    const css = readFileSync(resolve(__dirname, '../../style.css'), 'utf-8');
    // Check that the global img rule with max-width:100% and height:auto is present
    expect(css).toMatch(/img\s*\{[^}]*max-width\s*:\s*100%/s);
    expect(css).toMatch(/img\s*\{[^}]*height\s*:\s*auto/s);
  });

  it('all img elements in HTML do NOT have inline style overriding max-width', () => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
    const dom = new JSDOM(html);
    const imgs = dom.window.document.querySelectorAll('img');
    imgs.forEach(img => {
      const style = img.getAttribute('style') || '';
      // Inline style must not constrain max-width to a fixed px value
      expect(style).not.toMatch(/max-width\s*:\s*\d+px/);
    });
  });
});
