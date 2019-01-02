import { browser, element, by } from "protractor";
import { AppPage } from "./login.po";





describe('Users view', () => {

    it('Should create a user and check if a new user appears', () => {
        browser.get('/'); // 1
        let page = new AppPage();

        //call login
        page.login();
        browser.sleep(2000);
        expect(element(by.css(".app-title")).getText()).toEqual("KEACONDUCTOR");
        element(by.id("userNavButton")).click();
        browser.sleep(5000);

        element.all(by.css('.mat-row')).then(elementsBefore => {
            let userCardsBefore = elementsBefore.length;

            element(by.id("create-button")).click();
            element(by.id('createUserFirstName')).sendKeys('e2eTestFirstName');
            element(by.id('createUserLastName')).sendKeys('e2eTestLastName');
            element(by.id('createUserEmail')).sendKeys('e2eTestEmail@mail.dk');
            browser.sleep(5000);
            element(by.id("submitNewUserButton")).click();
            browser.sleep(5000);

            element.all(by.css('.mat-row')).then(elementsAfter => {
                let userCardsAfter = elementsAfter.length;
                expect(userCardsAfter - userCardsBefore).toBe(1);
            });
        });
    });
});