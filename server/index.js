#!/bin/sh
':' //; exec node --harmony "$0" "$@"
// The two previous lines run node with the harmony flags.

'use strict';

//====================================================================

var appConf = require('app-conf');
var coroutine = require('bluebird').coroutine;
var eventToPromise = require('event-to-promise');
var express = require('express');

//====================================================================

exports = module.exports = coroutine(function *main(args) {
  var cfg = yield appConf.load('sleeping-buddies-server', {
    defaults: {
      http: {
        address: 'localhost',
        port: 80,
      },
    },
  });

  var app = express();

  app.use(express.static(__dirname +'/../client/dist'));

  var server = app.listen(cfg.http.port, cfg.http.address);
  return eventToPromise(server, 'close');
});

//====================================================================

if (!module.parent) {
  require('exec-promise')(exports);
}
