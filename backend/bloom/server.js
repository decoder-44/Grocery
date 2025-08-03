import express from 'express';
import log from 'log';

var app = express();

app.listen(4041);
log(
    "Running a GraphQL API server at http://localhost:4041/graphql",
    {},
    null
);
