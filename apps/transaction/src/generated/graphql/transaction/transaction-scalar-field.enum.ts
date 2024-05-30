import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    transactionExternalId = "transactionExternalId",
    value = "value",
    createdAt = "createdAt",
    accountExternalIdDebit = "accountExternalIdDebit",
    accountExternalIdCredit = "accountExternalIdCredit",
    transactionTypeId = "transactionTypeId",
    transactionStatusId = "transactionStatusId"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
