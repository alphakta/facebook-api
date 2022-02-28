import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPosts = () =>
  prisma.post.findMany();

export const getById = (id) =>
  prisma.post.findUnique({
    where: { id: id },
  })

export const createOne = async ({ message, authorId }) => {
  return prisma.post.create({
    data: {
      message,
      Author: {
        connect: { id: authorId }
      },
    },
  });
}

export const updateOneById = async ({ id, message }) => {
  return prisma.post.update({
    where: {
      id,
    },
    data: {
      message,
    },
  });
}

export const deleteById = async (id) => {
  return prisma.post.delete({
    where: { id },
  });
}