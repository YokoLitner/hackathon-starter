import { DataSource, DataSourceOptions } from 'typeorm';

const PostgresDataSource: DataSourceOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'test',
  logging: false,
  synchronize: false,
  entities: ['dist/src/internal/entity/*.entity.js'],
  migrations: ['dist/src/internal/migration/*.js'],
  migrationsTableName: 'migrations',
};

export const PostgresDataConnetion = new DataSource(PostgresDataSource);
