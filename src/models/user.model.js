import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findUser = ({ email, password }, select) => {
  return prisma.user.findFirst({
    where: {
      email,
      password,
    },
    select,
  });
}

export const createUser = ({ email, password }) => {
  return prisma.user.create({
    data: {
      email,
      password,
      Profile: {
        create: {
          firstName: '',
          lastName: ''
        }
      }
    }
  });
}

