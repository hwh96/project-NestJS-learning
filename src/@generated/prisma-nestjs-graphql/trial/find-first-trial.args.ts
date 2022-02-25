import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialWhereInput } from './trial-where.input';
import { TrialOrderByWithRelationInput } from './trial-order-by-with-relation.input';
import { TrialWhereUniqueInput } from './trial-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrialScalarFieldEnum } from './trial-scalar-field.enum';

@ArgsType()
export class FindFirstTrialArgs {

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

    @Field(() => [TrialScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TrialScalarFieldEnum>;
}
