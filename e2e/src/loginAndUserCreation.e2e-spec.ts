import { browser, element, by } from 'protractor';
import { AppPage } from './keaConductor.po';


const uniqid = require('uniqid');
const uniqueEmailPrefix = uniqid();


describe('Application', () => {

    const page = new AppPage();

    it('should login', () => {
        browser.get('/');
        page.login();
        browser.sleep(2000);
        expect(element(by.css('.app-title')).getText()).toEqual('KEACONDUCTOR');
    });

    it('should navigate to user tab', () => {
        page.navigateToUserTab();
        expect(element(by.id('title')).getText()).toEqual('USERS');
        browser.sleep(2000);
    });

    it('should create a user and confirm creation by searching for it', () => {
        page.createUserFromUserTab(uniqueEmailPrefix);

        browser.sleep(2000);
        page.searchForUser(uniqueEmailPrefix);
        browser.sleep(2000);

        element.all(by.css('.mat-row')).then(elementsAfter => {
            expect(elementsAfter.length).toBe(1);
        });
    });
});
