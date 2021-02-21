import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 1433,
  username: process.env.DATABASE_USERNAME || 'sa',
  password: process.env.DATABASE_PASSWORD || '123456',
  database: process.env.DATABASE_NAME,
  synchronize: false,
  // autoLoadEntities: true,
  entities: [__dirname + '/../entities/*.{ts,js}'],
  logging: process.env.DATABASE_LOG === 'true',
  dropSchema: false,
  schema: 'dbo',
  options: {
    enableArithAbort: false,
    encrypt: false,
  },
};
