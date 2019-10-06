import syncHash, { observer } from "./sync_hash";

import "../css/main.scss";
{
  const hash = location.hash;
  if (hash) {
    const el = document.querySelector(`details${hash}`);
    if (el) el.open = true;
  }
}

{
  document
    .querySelectorAll("details[id]")
    .forEach(el => observer.observe(el, config));
}
