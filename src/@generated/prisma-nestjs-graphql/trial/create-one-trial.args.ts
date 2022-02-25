import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialCreateInput } from './trial-create.input';

@ArgsType()
export class CreateOneTrialArgs {

    @Field(() => TrialCreateInput, {nullable:false})
    data!: TrialCreateInput;
}
