import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TrialCountOrderByAggregateInput } from './trial-count-order-by-aggregate.input';
import { TrialAvgOrderByAggregateInput } from './trial-avg-order-by-aggregate.input';
import { TrialMaxOrderByAggregateInput } from './trial-max-order-by-aggregate.input';
import { TrialMinOrderByAggregateInput } from './trial-min-order-by-aggregate.input';
import { TrialSumOrderByAggregateInput } from './trial-sum-order-by-aggregate.input';

@InputType()
export class TrialOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    team?: keyof typeof SortOrder;

    @Field(() => TrialCountOrderByAggregateInput, {nullable:true})
    _count?: TrialCountOrderByAggregateInput;

    @Field(() => TrialAvgOrderByAggregateInput, {nullable:true})
    _avg?: TrialAvgOrderByAggregateInput;

    @Field(() => TrialMaxOrderByAggregateInput, {nullable:true})
    _max?: TrialMaxOrderByAggregateInput;

    @Field(() => TrialMinOrderByAggregateInput, {nullable:true})
    _min?: TrialMinOrderByAggregateInput;

    @Field(() => TrialSumOrderByAggregateInput, {nullable:true})
    _sum?: TrialSumOrderByAggregateInput;
}
