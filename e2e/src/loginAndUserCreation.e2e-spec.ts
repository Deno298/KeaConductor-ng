import { browser, element, by } from 'protractor';
import { AppPage } from './login.po';

const uniqid = require('uniqid');




describe('Users view', () => {

    it('should create a user and check if the new user appears', () => {
        browser.get('/');
        let page = new AppPage();
        page.login();
        browser.sleep(2000);
        expect(element(by.css('.app-title')).getText()).toEqual('KEACONDUCTOR');
        element(by.id('userNavButton')).click();
        browser.sleep(2000);


        const uniqueEmailPrefix = uniqid();
        element(by.id('create-button')).click();
        element(by.id('createUserFirstName')).sendKeys('e2eTestFirstName');
        element(by.id('createUserLastName')).sendKeys('e2eTestLastName');
        element(by.id('createUserEmail')).sendKeys(`${uniqueEmailPrefix}@mail.dk`);
        browser.sleep(2000);
        element(by.id('submitNewUserButton')).click();
        browser.sleep(2000);

        element(by.id('userSearch')).sendKeys(uniqueEmailPrefix);

        browser.sleep(5000);

        element.all(by.css('.mat-row')).then(elementsAfter => {
            console.log(elementsAfter.length);
            expect(elementsAfter.length).toBe(1);
        });
    });
});