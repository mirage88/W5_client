require.config({
  paths: {
    jquery: '../libs/vendor/jquery-1.8.2.min',
    underscore: '../libs/vendor/underscore-1.4.2.min',
    backbone: '../libs/vendor/backbone-0.9.2.min',
    mocha: 'libs/mocha-1.7.0',
    chai: 'libs/chai-1.3.0',
    collections: '../app/collections',
    models: '../app/models',
    views: '../app/views',
    testCollections: './collections'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    },
  }
});

require(['jquery', 'underscore', 'mocha', 'chai'], function($, _, mocha, chai) {
  mocha.setup({ ui: 'tdd', ignoreLeaks: true });

  this.assert = chai.assert;

  var tests = [];

  tests.push('testCollections/schedule_test');

  require(tests, function() {
    $(function() {
      mocha.run();
    });
  });
});
