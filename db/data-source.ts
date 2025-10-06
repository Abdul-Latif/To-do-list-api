import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";

config();


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: ['dist/**/*.entity{.js,.ts}'],
    migrations: [],
    logging: false
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;