const dependencies = require('../dependencies.json')
const R = require('ramda')
const glob = require('glob')
const path = require('path')

function toFile (pkg, imprt) {
	const s = imprt.replace(/\./g, path.sep)
	return `bower_components/purescript-${pkg}/src/${s}.purs`
}

const files = R.compose(
  R.unnest,
  R.map(pr => R.map(v => toFile(pr[0], v), pr[1])),
  R.toPairs
)(dependencies)


const ours = glob.sync('src/**/*.purs')

console.log(R.join(' ', R.concat(files, ours)))