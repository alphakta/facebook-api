import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const upsertProfile = async ({ firstName, lastName, userId }) => {
   return prisma.profile.upsert({
      where: {
         userId: userId,
      },
      update: {
         firstName: firstName,
         lastName: lastName,
      },
      create: {
         firstName,
         lastName,
         User: {
            connect: { id: userId },
         }
      }
   })

}

export const getById = async (userId) => {
   return prisma.profile.findUnique({
      where: { userId: userId }
   })
}

export const deleteProfileById = async (userId) => {
   return prisma.profile.deleteMany({
      where: {userId: userId}
   })
}

export const deleteProfilePostsById = async (userId) => {
   return prisma.post.deleteMany({
      where: {authorId: userId}
   })
}

export const deleteUserById = async (userId) => {
   return prisma.user.delete({
      where: { id: userId }
   })
}

export const getPostsById = async (userId) => {
   return prisma.post.findMany({
      where: { authorId: userId }
   })

}