#!/usr/bin/env node
const meow = require('meow');
const bree = require('.');

const cli = meow(`
	Usage
	  $ bree [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ bree
	  unicorns & rainbows
	  $ bree ponies
	  ponies & rainbows
`);

console.log(bree(cli.input[0] || 'unicorns'));
