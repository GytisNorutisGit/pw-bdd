import { Page, test } from '@playwright/test';

export class NavigationHeader {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    // Store locators in constructor
    // this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    
    
  }

  async navigateToLink(link: string) {
    await test.step(`Click on link: ${link} in the navigation bar`, async () => {
      await this.page.getByRole('link', { name: link }).click();
    });
  }

}   