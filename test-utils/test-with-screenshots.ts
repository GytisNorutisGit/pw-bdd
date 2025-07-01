import { test as base } from '@playwright/test';

type StepFn = (title: string, fn: () => unknown) => unknown;

/**
 * Extended test with automatic screenshot capture after each test step
 * Usage: import { test } from '../test-utils/test-with-screenshots';
 */
export const test = base.extend<{ step: StepFn }>({
  step: async ({ page }, use, testInfo) => {
    await use(async (title, fn) => {
      await base.step(title, async () => {
        try {
          await fn();
        } finally {
          // Sanitize step title for filename
          const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
          
          await testInfo.attach(`${sanitizedTitle}.png`, { 
            body: await page.screenshot({ fullPage: true }), 
            contentType: 'image/png' 
          }); 
        }
      });
    });
  }
});

export { expect } from '@playwright/test';
