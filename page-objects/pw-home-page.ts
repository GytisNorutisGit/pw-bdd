import { Page, test } from '@playwright/test';    

export class HomePage {
  readonly page: Page;
  readonly getStartedLink;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto() {
    await test.step('Navigate to Playwright homepage', async () => {
      await this.page.goto('https://playwright.com');
    });
  }

  async getTitle() {
    return await test.step('Verify page title is correct', async () => {
      return this.page.title();
    });
  }

  async clickGetStarted() {
    await test.step('Click Get Started link', async () => {
      await this.getStartedLink.click();
    });
  }
}