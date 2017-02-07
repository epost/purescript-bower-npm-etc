# Purescript, browser, node, bower, browserify, pulp, npm, FFI

And that kind of shit.

### 0. Define which `.purs` files need to be compiled

The dependencies are specified `dependencies.json`

	{
		"control": [
			"Control.Alt",
			"Control.Plus",
			/* etc... etc. */
		],
	}

This is mapped to

> bower_components/purescript-control/src/Control/Monad/Eff/Console.purs

(but for `purescript-control`, `Control/Alt.purs`, etc..)

This script creates the mapping:

	node scripts/purescript-manual-build.js

### 1. Build all purescript files into `output/`

With `$FILES=(node scripts/purescript-manual-build.js)`

	psc --source-maps -o build/purescript -v $FILES

### 2. Bundling the files

`psc-bundle` takes all the JS files in `build/purescript` and *basically
concatenates* them, result being `build/purescript-bundle.js`.

	OUTPUT=$(find build/purescript -type f -name '*.js')
	psc-bundle $OUTPUT -m Main -o build/purescript-bundle.js

### 3. Resolving `require(...)` statements

The FFI JS is bundled unprocessed in the resulting
`purescript-bundle.js` so it contains `require(...)` calls.

You can now use `webpack` or another bundler to resolve this.

For example, installing a dependency using `npm` so it's
stored in `package.json` and `node_modules/` will allow
you to run `node main.js`

	ps = require('./build/purescript-bundle.js')
	ps['Main'].main()


