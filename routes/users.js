const router = require('koa-router')();
const dbServer = require('./dbServer');

router.prefix('/users')

function test(a) {
  return new Promise(() => {

  })
}

router.post('/bar', async(ctx, next) => {
  ctx.body = {
      img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2847717430,1606509281&fm=58&s=0272C8328CA07D0147EC71C6000030B0&bpow=121&bpoh=75'
    }
    //let infoCode = await dbServer.find({"name": ctx.request.body.name});
})

router.post('/lotto', async(ctx, next) => {
  ctx.body = [{
      name: '张三',
      img: 'http://img3.imgtn.bdimg.com/it/u=3797592229,3840448992&fm=26&gp=0.jpg'
    },{
      name: '张四',
      img: 'http://img3.imgtn.bdimg.com/it/u=3797592229,3840448992&fm=26&gp=0.jpg'
    },{
      name: '张五',
      img: 'http://img3.imgtn.bdimg.com/it/u=3797592229,3840448992&fm=26&gp=0.jpg'
    }]
    //let infoCode = await dbServer.find({"name": ctx.request.body.name});
})

module.exports = router