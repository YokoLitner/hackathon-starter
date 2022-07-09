import { Permission } from 'src/internal/entity/permission.entity';
import { Role } from 'src/internal/entity/role.entity';
import { User } from 'src/internal/entity/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const PostgresDataSource: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'test',
  logging: true,
  migrationsRun: false,
  synchronize: true,
  entities: [Permission, Role, User],
  migrationsTableName: 'migrations',
};
