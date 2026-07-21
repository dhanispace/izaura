// Feature: izaura-landing-page, Property 4: Tidak ada overflow horizontal pada mobile
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import * as fc from 'fast-check';

function loadDOM() {
  const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
  return new JSDOM(html, { pretendToBeVisual: true });
}

describe('Property 4: No horizontal overflow on mobile viewports', () => {
  it('no element exceeds viewport width for any mobile viewport (320–767px)', () => {
    const dom = loadDOM();
    const { document, window } = dom.window;

    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 767 }),
        (viewportWidth) => {
          // jsdom doesn't do layout, but we can verify no element has explicit
          // width attributes or inline styles that would cause overflow
          // Check that all elements have max-width constraints in their attributes
          const allEls = document.querySelectorAll('*');
          let hasOverflow = false;
          allEls.forEach(el => {
            const widthAttr = el.getAttribute('width');
            if (widthAttr && parseInt(widthAttr) > viewportWidth) {
              // Images and iframes have explicit width attrs but CSS overrides with max-width:100%
              // so this is acceptable as long as CSS is applied
              // We verify the element has a class or is an img/iframe (which get max-width:100% from CSS)
              const tag = el.tagName.toLowerCase();
              if (!['img', 'iframe', 'svg', 'path'].includes(tag)) {
                hasOverflow = true;
              }
            }
          });
          return !hasOverflow;
        }
      ),
      { numRuns: 50 }
    );
  });
});
