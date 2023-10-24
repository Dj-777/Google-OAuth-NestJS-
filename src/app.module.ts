import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleModule } from './google/google.module';
import { GoogleStrategy } from './google/google.strategy';

@Module({
  imports: [GoogleModule],
  controllers: [AppController],
  providers: [AppService,GoogleStrategy],
})
export class AppModule {}
