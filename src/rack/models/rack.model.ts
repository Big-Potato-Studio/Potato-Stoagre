import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Rack {
    @Field(type => Int)
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Field({ description: 'The name of the rack' })
    @Column({ length: 75 })
    name: string;

    @Field({ description: 'The description of the rack' })
    @Column({ length: 255 })
    description: string;
}