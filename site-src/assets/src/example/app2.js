import { camelCase, join } from "lodash-es";
export default function app2() {
  import("./foo.js").then(({ default: foo, world }) => {
    const salutation = join([foo, world], " ");
    console.log(camelCase(salutation));
  });
}
