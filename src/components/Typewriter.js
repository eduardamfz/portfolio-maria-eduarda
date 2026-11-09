"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? 35 : 70;

    if (!deleting && text === word) delay = 1600;
    else if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="typewriter" aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
