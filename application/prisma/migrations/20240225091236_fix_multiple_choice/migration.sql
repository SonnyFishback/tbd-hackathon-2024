/*
  Warnings:

  - You are about to drop the column `type` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InterviewSubmission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionID_fkey";

-- DropForeignKey
ALTER TABLE "InterviewSubmission" DROP CONSTRAINT "InterviewSubmission_interviewID_fkey";

-- DropForeignKey
ALTER TABLE "InterviewSubmission" DROP CONSTRAINT "InterviewSubmission_intervieweeID_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "type";

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "InterviewSubmission";

-- CreateTable
CREATE TABLE "InterviewAnswer" (
    "id" SERIAL NOT NULL,
    "interviewId" UUID NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "InterviewAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerChoice" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "questionID" UUID NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AnswerChoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InterviewAnswer" ADD CONSTRAINT "InterviewAnswer_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerChoice" ADD CONSTRAINT "AnswerChoice_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
