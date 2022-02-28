import { launch } from './server';

launch({
  protocol: process.env.PROTOCOL,
  host: process.env.HOST,
  port: process.env.PORT,
});