import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
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
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
