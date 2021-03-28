import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AppService } from './app.service';

type TaskContentDTO = {
  name: string,
  dateLimit: Date
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/:todoId')
  setTask(@Param('todoId') todoId: string, @Body() input: TaskContentDTO): void {
    //this.appService.setTask(input);
  }

}
