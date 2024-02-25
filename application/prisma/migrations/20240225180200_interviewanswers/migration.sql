/*
  Warnings:

  - You are about to drop the column `answer` on the `InterviewAnswer` table. All the data in the column will be lost.
  - Added the required column `answerId` to the `InterviewAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InterviewAnswer" DROP COLUMN "answer",
ADD COLUMN     "answerId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "InterviewAnswer" ADD CONSTRAINT "InterviewAnswer_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "AnswerChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
