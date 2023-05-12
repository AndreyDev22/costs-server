import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cost, CostsSchema } from 'src/schemas/costs.schema';
import { CostsController } from './costs.controller';
import { CostsService } from './costs.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostsSchema }]),
    AuthModule,
  ],
  controllers: [CostsController],
  providers: [CostsService],
})
export class CostsModule {}
