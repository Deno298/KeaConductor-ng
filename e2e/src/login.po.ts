import { browser, by, element } from 'protractor';

export class AppPage {

  login(): void {
    element(by.id('login_email')).sendKeys('admin@admin.dk');
    browser.sleep(1000);
    element(by.id('login_password')).sendKeys('admin');
    browser.sleep(1000);
    element(by.id('login_button')).click();
  }
}
