import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialWhereInput } from './trial-where.input';

@ArgsType()
export class DeleteManyTrialArgs {

    @Field(() => TrialWhereInput, {nullable:true})
    where?: TrialWhereInput;
}
