import React from "react";

export default function Link(props: LinkProps) {
  return (
    <a className="text-green hover:underline" href={props.link}>{props.children}</a>
  );
}

interface LinkProps extends React.PropsWithChildren {
  link: string;
}
