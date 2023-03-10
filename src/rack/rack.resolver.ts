import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Rack } from './models/rack.model';
import { RackService } from './rack.service';


@Resolver(of => Rack)
export class RackResolver {
    constructor(
        private readonly rackService: RackService,
    ) {}


    @Query(returns => [Rack], { name: 'racks', description: 'Get all racks' })
    async getRacks() {
        return this.rackService.findAll();
    }

    @Query(returns => Rack, { name: 'rack', description: 'Get a rack by id', nullable: true})
    async getRack(@Args('id', { type: () => Int }) id: number) {
        return this.rackService.findOneById(id);
    }

    @Mutation(returns => Rack, { name: 'createRack', description: 'Create a new rack' })
    async createRack(
        @Args('name') name: string,
        @Args('description', { defaultValue: "" }) description: string) {
        return this.rackService.create(name, description);
    }
}