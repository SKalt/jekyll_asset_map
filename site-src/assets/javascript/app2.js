export default function app2() {
  import('./foo.js').then(({default: foo}) => console.log(foo))
}
