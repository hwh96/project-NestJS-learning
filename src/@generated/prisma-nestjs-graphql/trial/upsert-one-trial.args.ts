import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialWhereUniqueInput } from './trial-where-unique.input';
import { TrialCreateInput } from './trial-create.input';
import { TrialUpdateInput } from './trial-update.input';

@ArgsType()
export class UpsertOneTrialArgs {

    @Field(() => TrialWhereUniqueInput, {nullable:false})
    where!: TrialWhereUniqueInput;

    @Field(() => TrialCreateInput, {nullable:false})
    create!: TrialCreateInput;

    @Field(() => TrialUpdateInput, {nullable:false})
    update!: TrialUpdateInput;
}
