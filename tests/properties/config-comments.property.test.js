// Feature: izaura-landing-page, Property 11: Komentar konfigurasi hadir di semua nilai yang dapat diedit
// Validates: Requirements 8.3, 8.4
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect, beforeAll } from 'vitest';

let html;

beforeAll(() => {
  html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
});

describe('Property 11: Configuration comments present for all editable values', () => {
  it('Air Izaura product image has a replacement comment above it', () => {
    expect(html).toContain('<!-- Ganti dengan foto produk Air Izaura -->');
  });

  it('Black Garlic product image has a replacement comment above it', () => {
    expect(html).toContain('<!-- Ganti dengan foto produk Black Garlic -->');
  });

  it('WhatsApp link has a comment specifying the placeholder to replace', () => {
    expect(html).toContain('<!-- Ganti 62xxxxxxxxxx dengan nomor WA aktif -->');
  });

  it('Instagram link has a comment specifying the placeholder to replace', () => {
    expect(html).toContain('<!-- Ganti nama_akun dengan username Instagram aktif -->');
  });

  it('Google Maps iframe has a comment about replacing the src URL', () => {
    expect(html).toContain('<!-- Ganti src dengan URL embed Google Maps Anda -->');
  });

  it('address element has a comment about replacing the address text', () => {
    expect(html).toContain('<!-- Ganti dengan alamat toko Anda');
  });

  it('price card has a comment about replacing the price', () => {
    expect(html).toContain('<!-- Ganti dengan harga produk Black Garlic -->');
  });

  it('all configurable comments appear before their respective elements', () => {
    // Verify ordering: comment text appears before the relevant element
    const waCommentIdx = html.indexOf('<!-- Ganti 62xxxxxxxxxx');
    const waLinkIdx = html.indexOf('href="https://wa.me/');
    expect(waCommentIdx).toBeLessThan(waLinkIdx);

    const igCommentIdx = html.indexOf('<!-- Ganti nama_akun');
    const igLinkIdx = html.indexOf('href="https://instagram.com/');
    expect(igCommentIdx).toBeLessThan(igLinkIdx);

    const mapsCommentIdx = html.indexOf('<!-- Ganti src dengan URL embed');
    const iframeIdx = html.indexOf('<iframe');
    expect(mapsCommentIdx).toBeLessThan(iframeIdx);
  });
});
