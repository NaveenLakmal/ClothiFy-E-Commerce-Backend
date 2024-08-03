import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config({path: '.env'});

export default new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    migrations: ['migrations/**'],
    entities: [__dirname + 'src/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations_table',
})