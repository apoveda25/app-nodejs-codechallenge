import { registerEnumType } from '@nestjs/graphql';

export enum TransactionStatusScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt"
}


registerEnumType(TransactionStatusScalarFieldEnum, { name: 'TransactionStatusScalarFieldEnum', description: undefined })
