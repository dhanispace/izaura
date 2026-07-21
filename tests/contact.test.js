// Feature: izaura-landing-page | Unit tests: contact buttons
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { beforeAll, describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

let document, window;

beforeAll(() => {
  const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;
  window = dom.window;
});

describe('Contact — Button validation', () => {
  it('WhatsApp button has target="_blank"', () => {
    const waBtn = document.querySelector('a[href*="wa.me"]');
    expect(waBtn).not.toBeNull();
    expect(waBtn.getAttribute('target')).toBe('_blank');
  });

  it('WhatsApp button has rel="noopener noreferrer"', () => {
    const waBtn = document.querySelector('a[href*="wa.me"]');
    expect(waBtn.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('Instagram button has target="_blank"', () => {
    const igBtn = document.querySelector('a[href*="instagram.com"]');
    expect(igBtn).not.toBeNull();
    expect(igBtn.getAttribute('target')).toBe('_blank');
  });

  it('Instagram button has rel="noopener noreferrer"', () => {
    const igBtn = document.querySelector('a[href*="instagram.com"]');
    expect(igBtn.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('WA button is hidden when href still contains placeholder', () => {
    const waBtn = document.querySelector('a[href*="wa.me"]');
    // The JS config validation sets display:none for placeholder hrefs
    if (waBtn && waBtn.getAttribute('href').includes('62xxxxxxxxxx')) {
      expect(waBtn.style.display).toBe('none');
    }
  });

  it('IG button is hidden when href still contains placeholder', () => {
    const igBtn = document.querySelector('a[href*="instagram.com"]');
    if (igBtn && igBtn.getAttribute('href').includes('nama_akun')) {
      expect(igBtn.style.display).toBe('none');
    }
  });
});
