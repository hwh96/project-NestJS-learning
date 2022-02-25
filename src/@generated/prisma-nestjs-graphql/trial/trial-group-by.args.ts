import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialWhereInput } from './trial-where.input';
import { TrialOrderByWithAggregationInput } from './trial-order-by-with-aggregation.input';
import { TrialScalarFieldEnum } from './trial-scalar-field.enum';
import { TrialScalarWhereWithAggregatesInput } from './trial-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TrialCountAggregateInput } from './trial-count-aggregate.input';
import { TrialAvgAggregateInput } from './trial-avg-aggregate.input';
import { TrialSumAggregateInput } from './trial-sum-aggregate.input';
import { TrialMinAggregateInput } from './trial-min-aggregate.input';
import { TrialMaxAggregateInput } from './trial-max-aggregate.input';

@ArgsType()
export class TrialGroupByArgs {

    @Field(() => TrialWhereInput, {nullable:true})
    where?: TrialWhereInput;

    @Field(() => [TrialOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TrialOrderByWithAggregationInput>;

    @Field(() => [TrialScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TrialScalarFieldEnum>;

    @Field(() => TrialScalarWhereWithAggregatesInput, {nullable:true})
    having?: TrialScalarWhereWithAggregatesInput;

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
