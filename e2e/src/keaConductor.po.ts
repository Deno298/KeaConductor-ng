import { browser, by, element } from 'protractor';


export class AppPage {

  login(): void {
    element(by.id('login_email')).sendKeys('admin@admin.dk');
    browser.sleep(1000);
    element(by.id('login_password')).sendKeys('admin');
    browser.sleep(1000);
    element(by.id('login_button')).click();
  }

  navigateToUserTab(): void {
    element(by.id('userNavButton')).click();
  }

  createUserFromUserTab(emailPrefix : string): void {
        element(by.id('create-button')).click();
        element(by.id('createUserFirstName')).sendKeys('e2eTestFirstName');
        element(by.id('createUserLastName')).sendKeys('e2eTestLastName');
        element(by.id('createUserEmail')).sendKeys(`${emailPrefix}@mail.dk`);
        browser.sleep(2000);
        element(by.id('submitNewUserButton')).click();
  }

  searchForUser(searchKey : string): void {
    element(by.id('userSearch')).sendKeys(searchKey);
  }
  

}
