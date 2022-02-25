import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialUpdateInput } from './trial-update.input';
import { TrialWhereUniqueInput } from './trial-where-unique.input';

@ArgsType()
export class UpdateOneTrialArgs {

    @Field(() => TrialUpdateInput, {nullable:false})
    data!: TrialUpdateInput;

    @Field(() => TrialWhereUniqueInput, {nullable:false})
    where!: TrialWhereUniqueInput;
}
