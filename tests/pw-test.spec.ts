import { test, expect } from '../test-utils/test-with-screenshots';
import { PageManager } from '../page-objects/page-manager';

// // Helper function to automatically take screenshot after test step
// async function step(stepName: string, stepFunction: () => Promise<void>, page: any, testInfo: any) {
//     await test.step(stepName, async () => {
//         await stepFunction();
        
//         // Take screenshot after step with sanitized step name as filename
//         const screenshot = await page.screenshot({ fullPage: true });
//         const sanitizedName = stepName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
//         await testInfo.attach(`${sanitizedName}.png`, {
//             body: screenshot,
//             contentType: 'image/png'
//         });
//     });
// }


// type StepFn = (title: string, fn: () => unknown) => unknown;

// const test = base.extend<{step: StepFn}>({
//   step: async ({ page }, use, testInfo) => {
//     await use(async (title, fn) => {
//       await test.step(title, async () => {
//         try {
//           await fn();
//         } finally {
//           await testInfo.attach(`screenshot after step "${title}"`, { 
//             body: await page.screenshot(), 
//             contentType: 'image/png' 
//           }); 
//         }
//       });
//     });
//   }
// });



test.beforeEach(async ({ page }) => {
    // Navigate to a page to make this a proper Playwright test
    const pm = new PageManager(page);     
    await pm.onHomePage().goto();    
});

test('test logging in to home page', async ({ page }) => {
    //const navigationPage = new NavigationHeader(page);
    const pm = new PageManager(page); 
    expect(await pm.onHomePage().getTitle()).toContain('Playwright');
})

test('navigate to docs ', async ({ page }) => {
    const pm = new PageManager(page);
    expect(await pm.onHomePage().getTitle()).toContain('Playwright');
    await pm.onNavigationHeader().navigateToLink('Community');
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
})

test('BDD Test', async ({ page, step }) => {
    const pm = new PageManager(page);
    
    await step('Given I am on the home page', async () => {
        expect(await pm.onHomePage().getTitle()).toContain('Playwright');
    });
    
    await step('When I navigate to the Community Page', async () => {
        await pm.onNavigationHeader().navigateToLink('Community');
    });
    
    await step('Then I should see the welcome page', async () => {
        await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
    });
})







