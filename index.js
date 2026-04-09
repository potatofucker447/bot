const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'prismuniverse.playwithbao.com',
    port: 25565,
    username: 'AFK_Bot',
    auth: 'offline'
  })

  bot.on('spawn', () => {
    console.log('Joined server')
  })

  bot.on('end', () => {
    console.log('Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
}

createBot()

// keeps hosting service alive
require('http').createServer((req, res) => {
  res.end('alive')
}).listen(3000)
