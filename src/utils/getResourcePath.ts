import { Env } from "./env";

export const getResourcePath = (name: string): string => {
  if (Env.isNode) {
    const path = require("path");
    return path.resolve("./public/" + name);
  } else {
    return "/" + name;
  }
};
