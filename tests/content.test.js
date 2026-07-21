// Feature: izaura-landing-page | Unit tests: content and text
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

describe('Content — Headings and text', () => {
  it('h1 contains exact text "Air Izaura - Kesegaran Alami untuk Keluarga Anda"', () => {
    const h1 = document.querySelector('#hero h1');
    expect(h1.textContent.trim()).toBe('Air Izaura - Kesegaran Alami untuk Keluarga Anda');
  });

  it('hero sub-headline mentions murni, higienis, and terpercaya', () => {
    const p = document.querySelector('#hero p');
    expect(p).not.toBeNull();
    const text = p.textContent.toLowerCase();
    expect(text).toContain('murni');
    expect(text).toContain('higienis');
    expect(text).toContain('terpercaya');
  });

  it('CTA button label is "Pesan Sekarang"', () => {
    const cta = document.querySelector('.cta-button');
    expect(cta.textContent.trim()).toBe('Pesan Sekarang');
  });

  it('Black Garlic heading exact text "Black Garlic - Suplemen Herbal Alami"', () => {
    const h2 = document.querySelector('#black-garlic h2');
    expect(h2.textContent.trim()).toBe('Black Garlic - Suplemen Herbal Alami');
  });

  it('Black Garlic description is ≤ 300 characters', () => {
    const p = document.querySelector('#black-garlic p');
    expect(p.textContent.trim().length).toBeLessThanOrEqual(300);
  });

  it('Contact section heading is "Hubungi Kami"', () => {
    const h2 = document.querySelector('#contact h2');
    expect(h2.textContent.trim()).toBe('Hubungi Kami');
  });

  it('Location section heading is "Lokasi Kami"', () => {
    const h2 = document.querySelector('#location h2');
    expect(h2.textContent.trim()).toBe('Lokasi Kami');
  });
});
