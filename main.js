ps = require('./build/purescript-bundle.js')

console.log(Object.keys(ps))

ps['Main'].main()

