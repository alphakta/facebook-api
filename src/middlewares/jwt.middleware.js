import jwt from 'jsonwebtoken';
import { HttpException, HttpStatus } from '../errors/httpException.error';

const jwtMiddleware = (req, _res, next) => {
  const { authorization: token } = req.headers;

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  }
}

export default jwtMiddleware;
