import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/tasks/dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller()
export class TasksController {
    constructor(private readonly taskService: TasksService) { }



    @Get('show')
    showAllTasks() {
        return this.taskService.showAllTasks()
    }


    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto)
    }

    @Patch(':id')
    updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
        return this.taskService.updateTask(id, updateTaskDto)
    }



    @Delete(':id')
    removeTask(@Param('id') id: number) {
        return this.taskService.removeTask(id)
    }
}
