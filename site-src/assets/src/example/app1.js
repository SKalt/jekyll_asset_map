import hello, { world } from "./foo.js";
import { snakeCase, join, concat } from "lodash-es";
export default function() {
  const salutation = join([hello, world], "~");
  console.log(snakeCase(salutation));
}
