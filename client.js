const cp = require('child_process')
const ssh2 = require('ssh2')
let pro = cp.exec('./tar.sh', () => {
  console.log('执行tar.sh')
})

pro.stdout.pipe(process.stdout)
pro.on('exit', () => {
  // upload
  connent()
})

let conn = new ssh2.Client()
function connent() {
  conn
    .on('ready', () => {
      conn.sftp(
        (err,
        (sftp) => {
          sftp.fastPut(
            './vue3/dist.tar.gz',
            '/root/dist.tar.gz',
            {},
            (err, result) => {
              Shell(conn)
            }
          )
        })
      )
    })
    .connect({
      host: 'localhost',
      port: 10002,
      username: 'root',
      password: '1111111',
    })
}

function Shell(conn) {
  conn.shell((err, stream) => {
    stream
      .end(
        `
          cd /root
          mv www/vue3 bak/vue3.$(date "+%Y%m%d%H%M%S").bak
          tar zxvf dist.tar.gz
          mv dist www/vue3
          rm -rf dist.tar.gz
          exit
        `
      )
      .on('data', (data) => {
        console.log(data.toString())
      })
      .on('data', () => {
        conn.end()
      })
  })
}
// 基于Node.js的ssh2实现Vue3项目自动化打包发布
// 执行命令
// ssh root@localhost -p 10022

// node client.js
