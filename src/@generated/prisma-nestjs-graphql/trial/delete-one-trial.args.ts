import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialWhereUniqueInput } from './trial-where-unique.input';

@ArgsType()
export class DeleteOneTrialArgs {

    @Field(() => TrialWhereUniqueInput, {nullable:false})
    where!: TrialWhereUniqueInput;
}
