import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'camilo', //aqui reemplaza con tu usuario
      password: '1210', //reemplaza con tu contraseña
      database: 'RECOVR_DataBase',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Esto permite que TypeORM cargue todas las entidades automáticamente
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
