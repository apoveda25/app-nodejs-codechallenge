-- CreateTable
CREATE TABLE `Transaction` (
    `transactionExternalId` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `accountExternalIdDebit` VARCHAR(191) NOT NULL,
    `accountExternalIdCredit` VARCHAR(191) NOT NULL,
    `transactionTypeId` INTEGER NOT NULL,
    `transactionStatusId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transactionExternalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransactionType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransactionStatus` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `TransactionStatus_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_transactionTypeId_fkey` FOREIGN KEY (`transactionTypeId`) REFERENCES `TransactionType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_transactionStatusId_fkey` FOREIGN KEY (`transactionStatusId`) REFERENCES `TransactionStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
