import { registerEnumType } from '@nestjs/graphql';

export enum TrialScalarFieldEnum {
    id = "id",
    count = "count",
    createdAt = "createdAt",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    message = "message",
    team = "team"
}


registerEnumType(TrialScalarFieldEnum, { name: 'TrialScalarFieldEnum', description: undefined })
