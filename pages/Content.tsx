import React, { useEffect, useState } from "react";
import { CategoryState } from ".";
import About from './About';
import Games from './Games';

function Content(props: ContentProps) {
  const [isSSR, setIsSSR] = useState(true);
  let comp = [<About />, <Games />, <Projects />, <RandomStuff />][props.category];
  useEffect(() => setIsSSR(false));
  if (!isSSR) {
    return (
      <div className="w-[80%] float-right">
        {comp}
      </div>
    );
  }
  return <></>;
}

function Projects(props: any) {
  return (
    <>
      <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">Web Projects</h1>
    </>
  );
}

function RandomStuff(props: any) {
  return (
    <>
      <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">Random</h1>
    </>
  );
}

interface ContentProps {
  category: CategoryState;
}

export default Content;
