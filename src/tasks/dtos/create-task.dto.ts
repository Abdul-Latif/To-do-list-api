import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString({ message: "task must be a string!" })
    @IsNotEmpty({ message: 'task must not be empty' })
    task: string;

}