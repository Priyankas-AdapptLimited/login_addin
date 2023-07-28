import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from 'wdio-electron-service';
// const app = require('electron');

Given(/^I run the app$/, async () => {
    const title = await browser.getTitle();
    expect(title).toEqual('Hello World!');
    // const argv = await browser.app('argv');
    // console.log(argv, 'argv');
});

When(/^launch the electron app$/, async () => {
    console.log(await browser.getTitle(), 'apptitle')
});

Then(/^I should assert the content of the body$/, async () => {
    await expect($('#test')).toHaveTextContaining('Hello from React in Electron!');
});
