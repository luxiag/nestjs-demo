
## Hot Reload


## OOP、FP、FRP

FP functional Programming 函数式编程

pure functions 纯函数
side effects free 无副作用
without mutations 无突变



OOP面向对象编程


## AOP


## dotenv


## config

## @nestjs/config

## ORM




## TypeORM



## Logger

```js

const app = await NestFactory.create(AppModule,{
  // false 关闭日志
  // logger:['error','warn']
  logger:true

})

//使用
const logger = new Logger()
logger.log('这是一个log')
logger.warn('这是一个warn')


//其他模块
//添加模块名
private logger = new Logger(UserController.name)
```


## Pino

https://github.com/pinojs/pino

https://github.com/pinojs/pino/blob/HEAD/docs/web.md#nest

```js
import { NestFactory } from '@nestjs/core'
import { Controller, Get, Module } from '@nestjs/common'
import { LoggerModule, Logger } from 'nestjs-pino'

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

  @Get()
  getHello() {
    this.logger.log('something')
    return `Hello world`
  }
}

@Module({
  controllers: [AppController],
  imports: [LoggerModule.forRoot()]
})

class MyModule {}

async function bootstrap() {
  const app = await NestFactory.create(MyModule)
  await app.listen(3000)
}
bootstrap()

```


## winston