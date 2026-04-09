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

    // Delay to ensure server is ready
    setTimeout(() => {
      // Try registering first
      bot.chat('/register mybot123 mybot123')

      // Then try logging in
      setTimeout(() => {
        bot.chat('/login mybot123')
      }, 2000) // 2 seconds after /register
    }, 5000)
  })

  bot.on('end', () => {
    console.log('Disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
}

// Keep hosting alive
require('http').createServer((req, res) => {
  res.end('alive')
}).listen(3000)

createBot()
