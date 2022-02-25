import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrialCountAggregate } from './trial-count-aggregate.output';
import { TrialAvgAggregate } from './trial-avg-aggregate.output';
import { TrialSumAggregate } from './trial-sum-aggregate.output';
import { TrialMinAggregate } from './trial-min-aggregate.output';
import { TrialMaxAggregate } from './trial-max-aggregate.output';

@ObjectType()
export class TrialGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    team?: string;

    @Field(() => TrialCountAggregate, {nullable:true})
    _count?: TrialCountAggregate;

    @Field(() => TrialAvgAggregate, {nullable:true})
    _avg?: TrialAvgAggregate;

    @Field(() => TrialSumAggregate, {nullable:true})
    _sum?: TrialSumAggregate;

    @Field(() => TrialMinAggregate, {nullable:true})
    _min?: TrialMinAggregate;

    @Field(() => TrialMaxAggregate, {nullable:true})
    _max?: TrialMaxAggregate;
}
