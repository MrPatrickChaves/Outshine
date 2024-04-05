import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EnvConfigModule } from './shared/infraestructure/env-config/env-config.module';

@Module({
  imports: [UserModule, EnvConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
