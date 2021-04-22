module.exports = {
    tags: ["foo"],
    "Our first tests" : function (browser) {
        browser
            .url("https://actionqa.com")
            // .pause(3000)
            .end()
    },

    "Click test": function(browser) {
        browser
            .url("http://tutorials.actionqa.com/yt/nw/basic/click.html")
            // .pause(2000)
            .click('#surprise-button')
            // .pause(2000)

            browser.assert.visible("#surprise-message")

            .end()
    },

    "Fill form": function (browser) {
        browser
            .url("http://tutorials.actionqa.com/nwfree/simple-form.html")
            .setValue("#email", "foo@bar.com")
            .setValue("#password", "12345")
            .click("#submit")            
            .assert.containsText("#submitted-email", "foo@bar.com")
            // .pause(3000)

            .end()
    }
};