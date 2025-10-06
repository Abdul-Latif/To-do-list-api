import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsBoolean()
    status: boolean;
}