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

    // Run /register command after 5 seconds to ensure server is ready
    setTimeout(() => {
      bot.chat('/register mybot123 mybot123')
    }, 5000)
  })

  bot.on('end', () => {
    console.log('Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
}

// Keep hosting service alive
require('http').createServer((req, res) => {
  res.end('alive')
}).listen(3000)

createBot()
