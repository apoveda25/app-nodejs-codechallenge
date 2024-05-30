import { registerEnumType } from '@nestjs/graphql';

export enum TransactionStatusName {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}


registerEnumType(TransactionStatusName, { name: 'TransactionStatusName', description: undefined })
