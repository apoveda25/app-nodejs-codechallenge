import { registerEnumType } from '@nestjs/graphql';

export enum TransactionTypeScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt"
}


registerEnumType(TransactionTypeScalarFieldEnum, { name: 'TransactionTypeScalarFieldEnum', description: undefined })
