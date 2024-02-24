import { PrismaClient } from '@prisma/client'

// expose a singleton
export const prisma = new PrismaClient()