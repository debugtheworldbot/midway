import { Context, controller, inject, get, post,provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    this.ctx.body = `Welcome to midwayjs!`;
  }
  @post('/wechat')
  async wechat() {
    console.log(this.ctx.request.body)
    this.ctx.set("Access-Control-Allow-Headers","*")
  }
}
