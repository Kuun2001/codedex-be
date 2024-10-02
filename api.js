import express from 'express';
import { handler } from './bin/www';

const app = express();

app.use(handler);

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: 'Kuun API',
  };
}