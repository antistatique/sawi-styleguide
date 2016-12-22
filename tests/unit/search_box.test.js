var chai      = require("chai"),
    should    = chai.should(),
    expect    = chai.expect,
    jsdom     = require("jsdom"),
    config    = require('./../../gulp_config.json'),
    script    = 'search_box.js';

describe('Testing search_box.js', function () {
  var $;

  before(function () {
    global.document = jsdom.jsdom('<html><body></body></html>');
    global.window = global.document.defaultView;
    global.navigator = global.window.navigator;
    $ = global.jQuery = require('jquery');
    require('../../' + config.assets + "js/" + script);
  })

  it('be like that', function () {
    // Start your tests here
  });
});
