import { Module } from '@nestjs/common';
import { RackService } from './rack.service';
import { RackResolver } from './rack.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rack } from './models/rack.model';

@Module({
    imports: [TypeOrmModule.forFeature([Rack])],
    providers: [RackService, RackResolver],
})
export class RackModule {}
