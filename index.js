import express from "express";
import schema from "./scehma";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Graphql is amazing!</h1>");
});

const friendDatabase = {};

class Friend {
    constructor(id, { firstName, lastName, gender, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

const root = {
    friend: () => {
        return {
            id: "1084781239",
            firstName: "Doctor",
            lastName: "Jones",
            gender: "Male",
            email: "me@me.com",
        };
    },
    createFriend: ({ input }) => {
        let id = require("crypto").randomBytes(10).toString("hex");
        friendDatabase[id] = input;
        return new Friend(id, input);
    },
};

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
