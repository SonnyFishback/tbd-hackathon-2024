-- AlterTable
ALTER TABLE "User" ADD COLUMN     "levelId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "requirement" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
