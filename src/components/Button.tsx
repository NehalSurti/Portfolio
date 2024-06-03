import Link from "next/link";
import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  const isMailtoLink = link.startsWith("mailto:");

  if (isMailtoLink) {
    return (
      <a className="btn" href={link}>
        {text}
      </a>
    );
  }

  return (
    <Link className="btn" href={link}>
      {text}
    </Link>
  );
}

export default Button;
