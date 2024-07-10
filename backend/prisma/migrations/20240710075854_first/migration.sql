/*
  Warnings:

  - You are about to drop the column `idUser` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `lieu` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `nombrePlace` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `titre` on the `Event` table. All the data in the column will be lost.
  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_idUser_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "idUser",
DROP COLUMN "lieu",
DROP COLUMN "nombrePlace",
DROP COLUMN "titre",
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "seats" INTEGER NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "date" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
