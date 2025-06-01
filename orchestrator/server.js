import express from 'express';
import log from 'log';
import dotenv from "dotenv";
import apiHandler from './apis/apiHandler.js';
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'local';

dotenv.config({ path: path.join(__dirname, `.env.${env}`) });

var app = express();
app.use(express.json());

apiHandler(app);

app.listen(4042);
log(
    "Running a GraphQL API server at http://localhost:4042/graphql",
    {},
    null
);