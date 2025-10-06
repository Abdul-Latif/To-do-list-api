import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/tasks/dtos/create-task.dto';
import { TaskEntity } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>) { }


    showAllTasks() {
        return this.taskRepository.find()
    }

    createTask(createTaskDto: CreateTaskDto) {
        const task = this.taskRepository.create(createTaskDto)
        task.task = createTaskDto.task
        return this.taskRepository.save(task)
    }


    async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
        const task = await this.taskRepository.findOneBy({ id })
        if (!task) throw new BadRequestException('there is no task like that create a new one!')
        Object.assign(task, updateTaskDto)
        return this.taskRepository.save(task)
    }



    removeTask(id: number) {
        return this.taskRepository.delete({ id })
    }
}
