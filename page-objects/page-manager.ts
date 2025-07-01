import {Page, expect} from '@playwright/test';
import { NavigationHeader } from './pw-navigation-header';
import { HomePage } from './pw-home-page';


export class PageManager {
    private readonly page: Page;
    private readonly navigationHeader: NavigationHeader;
    private readonly homePage: HomePage;

    constructor(page: Page) {
        this.page= page;
        this.navigationHeader = new NavigationHeader(page);
        this.homePage = new HomePage(page); 
    }

    onNavigationHeader() {
        return this.navigationHeader;     
    }
    
    onHomePage() {
        return this.homePage;     
    }
}