import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { HttpException, HttpStatus } from '../errors/httpException.error';

export const loginUser = async (req, res, next) => {
  const user = await UserModel.findUser(req.body);
  const { email, password } = req.body;

  if (!user) {
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  }

  if(user.email != email && user.password != password){
    next(new HttpException('Unauthorized', HttpStatus.NOT_FOUND));
  }

  const token = jwt.sign({ id: user.id }, 'SECRET', {expiresIn: '1800s'});
  res.json({
    data: {
      user,
      token,
    },
  });
}

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.createUser({ email, password });

  res.status(201).json({ user });
}
