// Feature: izaura-landing-page | Unit tests: responsive and accessibility basics
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { beforeAll, describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

let document;

beforeAll(() => {
  const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
  const dom = new JSDOM(html);
  document = dom.window.document;
});

describe('Responsive — Viewport and images', () => {
  it('meta viewport exists with correct content', () => {
    const meta = document.querySelector('meta[name="viewport"]');
    expect(meta).not.toBeNull();
    const content = meta.getAttribute('content');
    expect(content).toContain('width=device-width');
    expect(content).toContain('initial-scale=1.0');
  });

  it('all images have non-empty alt attributes', () => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
      expect(img.hasAttribute('alt')).toBe(true);
      expect(img.getAttribute('alt').trim().length).toBeGreaterThan(0);
    });
  });

  it('no inline style attributes on body children', () => {
    const allElements = document.body.querySelectorAll('*');
    const withStyle = Array.from(allElements).filter(el =>
      el.hasAttribute('style') &&
      el.getAttribute('style').trim() !== ''
    );
    // The JS config validation adds display:none via style for placeholder buttons
    // We allow those specific elements; check that no others have inline style
    withStyle.forEach(el => {
      // Only WA/IG buttons and iframe are expected to have style set by JS validation
      const isValidated = el.matches('a[href*="wa.me"], a[href*="instagram.com"], iframe');
      expect(isValidated).toBe(true);
    });
  });

  it('no <style> tag inside the document', () => {
    const styleTags = document.querySelectorAll('style');
    expect(styleTags.length).toBe(0);
  });
});
