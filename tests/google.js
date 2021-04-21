module.exports = {
    '@tags' : ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = '[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtomSelector = '.jfk-button[type="submit"]';

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"`;
        const resultsPageLanguageSelector = '.KTBKoe';
        // const resultsPageUpdateSelector = '.KTBKoe';

        browser
        .url("https://www.google.com/advanced_search")
        .setValue(mainQueryInputSelector, mainQuery)
        .click(languageDropdownOpenerSelector)
        .click(languageDropdownValueSelector)
        .click(lastUpdateDropdownOpenerSelector)
        .click(lastUpdateDropdownValueSelector)
        .click(submitButtomSelector)
        .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
        .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
        .assert.urlContains('as_qdr=m', 'Params: Time period is last month')
        
        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input')
        browser.assert.containsText(resultsPageLanguageSelector, "Search Italian pages", "UI: Language is set to Italian")
        // browser.assert.containsText(resultsPageUpdateSelector, "Past month", "UI: Last update is set to Past Month")
        browser.saveScreenshot('tests_output/google.png')
    }
}