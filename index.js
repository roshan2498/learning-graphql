import express from "express";
import schema from "./scehma";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Graphql is amazing!</h1>");
});

const root = { hello: () => "Hi, I'm Ram" };

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(8080, () =>
    console.log("Running on server port localhost:8080/graphql")
);