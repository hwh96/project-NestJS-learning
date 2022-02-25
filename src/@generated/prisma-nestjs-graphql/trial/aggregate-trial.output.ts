import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TrialCountAggregate } from './trial-count-aggregate.output';
import { TrialAvgAggregate } from './trial-avg-aggregate.output';
import { TrialSumAggregate } from './trial-sum-aggregate.output';
import { TrialMinAggregate } from './trial-min-aggregate.output';
import { TrialMaxAggregate } from './trial-max-aggregate.output';

@ObjectType()
export class AggregateTrial {

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
