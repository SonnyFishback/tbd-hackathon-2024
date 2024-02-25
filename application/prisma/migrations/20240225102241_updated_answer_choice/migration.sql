/*
  Warnings:

  - Added the required column `text` to the `AnswerChoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AnswerChoice" ADD COLUMN     "text" TEXT NOT NULL;
