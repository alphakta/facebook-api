import jwt from 'jsonwebtoken';
import { HttpException, HttpStatus } from '../errors/httpException.error';

const jwtMiddleware = (request, response, next) => {
  const { authorization: token } = request.headers;
  
  try {
    const payload = jwt.verify(token, 'SECRET');
    request.user = payload;

    next();
  } catch(error) {
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  }
}

export default jwtMiddleware;
