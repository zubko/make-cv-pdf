import env from "./env";

export default name => {
  if (env.isNode) {
    const path = require("path");
    return path.resolve("./public/" + name);
  } else {
    return "/" + name;
  }
};
