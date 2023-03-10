import { Injectable } from '@nestjs/common';
import { Rack } from './models/rack.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RackService {

    constructor(
        @InjectRepository(Rack)
        private readonly rackRepository: Repository<Rack>,
    ) {}

    findOneById(id: number): Promise<Rack>  {
        return this.rackRepository.findOneBy({ id })
    }

    findAll(): Promise<Rack[]> {
        return this.rackRepository.find();
    }

    create(name: string, description: string): Promise<Rack> {
        const rack = new Rack();
        rack.name = name;
        rack.description = description;
        return this.rackRepository.save(rack);
    }
}
