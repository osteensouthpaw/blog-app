-- CreateTable
CREATE TABLE `Follower` (
    `followerId` VARCHAR(191) NOT NULL,
    `followingId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`followerId`, `followingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Follower` ADD CONSTRAINT `Follower_followerId_fkey` FOREIGN KEY (`followerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follower` ADD CONSTRAINT `Follower_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
