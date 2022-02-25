import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialUpdateManyMutationInput } from './trial-update-many-mutation.input';
import { TrialWhereInput } from './trial-where.input';

@ArgsType()
export class UpdateManyTrialArgs {

    @Field(() => TrialUpdateManyMutationInput, {nullable:false})
    data!: TrialUpdateManyMutationInput;

    @Field(() => TrialWhereInput, {nullable:true})
    where?: TrialWhereInput;
}
