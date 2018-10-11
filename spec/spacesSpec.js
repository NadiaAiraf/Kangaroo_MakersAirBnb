const Browser = require('zombie');

Browser.localhost('localhost', 3000)

describe('User visits the spaces page', function() {
  const browser = new Browser();

  beforeEach(function(done) {
    browser.visit('/spaces', done);
  });

  describe('spaces page', function(){
    it('should have a greeting header', function() {
      browser.assert.text('h1', 'All Makers AirBnb spaces')
    });

    it('should have a fake space', function() {
      browser.assert.text('li', 'Fake place, A lovely fake place., 123 Fake Street')
    });
  });
});
