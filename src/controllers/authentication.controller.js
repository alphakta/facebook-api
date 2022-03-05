import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { HttpException, HttpStatus } from '../errors/httpException.error';

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findUser({email, password});

  if (!user) 
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  else if (user.email != email && user.password != password)
    next(new HttpException('Unauthorized', HttpStatus.NOT_FOUND));
  else{
    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
    res.status(201).json({ user, token });
  }
}

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  if(email == '' || password == '')
    next(new HttpException('NO CONTENT', HttpStatus.NOT_FOUND));
  else{
    const user = await UserModel.createUserAndProfile({ email, password });
    res.status(201).json({ user });
  }


}
