// src/mocks/handlers.js
import { rest } from "msw";
import { usersDummy } from "../User.dummy";

export const handlers = [
  rest.get(new URL("/users", "https://jsonplaceholder.typicode.com").toString(), (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(usersDummy)
    );
  }),
];
