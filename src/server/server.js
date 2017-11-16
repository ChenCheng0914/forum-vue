#!/usr/bin/env node

require('babel-core/register')({
  "presets": ["es2015", "stage-0"],
  "plugins": ["transform-runtime"],
});
require('./index');