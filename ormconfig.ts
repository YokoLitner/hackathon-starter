import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const myDataSource = (
  {
    "type": "postgres",
    "host": "db",
    "port": 5432,
    "username": "postgres",
    "password": "password",
    "database": "test",
    "logging": true,
    "migrationsRun": false,
    "synchronize": false,
    "entities": ["dist/src/internal/entity/**.entity.js"],
    "migrations": ["dist/src/internal/migrations/**.js"],
    "migrationsTableName": "migrations"
  });
