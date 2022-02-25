import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialWhereInput } from './trial-where.input';
import { TrialOrderByWithRelationInput } from './trial-order-by-with-relation.input';
import { TrialWhereUniqueInput } from './trial-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrialCountAggregateInput } from './trial-count-aggregate.input';
import { TrialAvgAggregateInput } from './trial-avg-aggregate.input';
import { TrialSumAggregateInput } from './trial-sum-aggregate.input';
import { TrialMinAggregateInput } from './trial-min-aggregate.input';
import { TrialMaxAggregateInput } from './trial-max-aggregate.input';

@ArgsType()
export class TrialAggregateArgs {

    @Field(() => TrialWhereInput, {nullable:true})
    where?: TrialWhereInput;

    @Field(() => [TrialOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TrialOrderByWithRelationInput>;

    @Field(() => TrialWhereUniqueInput, {nullable:true})
    cursor?: TrialWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrialCountAggregateInput, {nullable:true})
    _count?: TrialCountAggregateInput;

    @Field(() => TrialAvgAggregateInput, {nullable:true})
    _avg?: TrialAvgAggregateInput;

    @Field(() => TrialSumAggregateInput, {nullable:true})
    _sum?: TrialSumAggregateInput;

    @Field(() => TrialMinAggregateInput, {nullable:true})
    _min?: TrialMinAggregateInput;

    @Field(() => TrialMaxAggregateInput, {nullable:true})
    _max?: TrialMaxAggregateInput;
}
