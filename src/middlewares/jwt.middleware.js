import jwt from 'jsonwebtoken';
import { HttpException, HttpStatus } from '../errors/httpException.error';

const jwtMiddleware = (req, res, next) => {
  const { authorization: token } = req.headers;
  
  try {
    const payload = jwt.verify(token, 'SECRET');
    req.user = payload;

    next();
  } catch(error) {
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  }
}

export default jwtMiddleware;
