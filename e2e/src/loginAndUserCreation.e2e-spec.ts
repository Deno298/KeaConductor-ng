import { browser, element, by } from 'protractor';
import { AppPage } from './keaConductor.po';


const uniqid = require('uniqid');
const uniqueEmailPrefix = uniqid();

let page = new AppPage();


describe('Application', () => {

    let page = new AppPage();
    
    it('should login', () => {
        browser.get('/');
        page.login();
        browser.sleep(2000);
        expect(element(by.css('.app-title')).getText()).toEqual('KEACONDUCTOR');
    });

    it('navigate to user tab', () => {
        page.navigateToUserTab();
        expect(element(by.id('title')).getText()).toEqual('USERS');
        browser.sleep(2000);
    });

    it('create a user and confirm creation by searching for it', () => {
        page.createUserFromUserTab(uniqueEmailPrefix);

        browser.sleep(2000);
        page.searchForUser(uniqueEmailPrefix);
        browser.sleep(2000);

        element.all(by.css('.mat-row')).then(elementsAfter => {
            console.log(elementsAfter.length);
            expect(elementsAfter.length).toBe(1);
        });
    });
});