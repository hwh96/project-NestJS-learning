import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialCreateManyInput } from './trial-create-many.input';

@ArgsType()
export class CreateManyTrialArgs {

    @Field(() => [TrialCreateManyInput], {nullable:false})
    data!: Array<TrialCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
