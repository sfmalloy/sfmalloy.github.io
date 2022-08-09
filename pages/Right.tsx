
import React, { useEffect, useState } from "react";
import { CategoryState } from ".";
import Image from 'next/image';

function Content(props: ContentProps) {
  const [isSSR, setIsSSR] = useState(true);
  let comp = [<About />, <Games />, <Projects />, <RandomStuff />][props.category];
  useEffect(() => setIsSSR(false));
  if (!isSSR) {
    return (
      <div className="w-2/3 2xl:w-3/4 float-right">
        {comp}
      </div>
    );
  }
  return <></>;
}

function About() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">About Me</h1>
        <p className="text-white delayed-fade m-8 text-2xl">
          <img className="float-right rounded-full m-8" src="https://avatars.githubusercontent.com/u/31411598" alt="Picture of a man" />
          I graduated college in 2021 with a B.S. in Computer Science and am currently working
          as a software developer. I have a lot of side interests including
          <ul className="list-disc list-inside pl-4 mt-8">
            <li>Game Development using the <Link link="https://unity.com/">Unity</Link> game engine</li>
            <li>Web Development with React and TypeScript (like <Link link="https://github.com/sfmalloy/sfmalloy.github.io"> this website</Link>)</li>
            <li>Compilers and Programming Languages</li>
            <li>Programming puzzles like ones from
              {' '}<Link link="https://adventofcode.com/">Advent of Code</Link>,
              {' '}<Link link="https://open.kattis.com/">Kattis</Link>, and
              {' '}<Link link="https://projecteuler.net">Project Euler</Link>
            </li>
          </ul>

        </p>
        <p className="text-white delayed-fade m-8 text-2xl">
          You probably found this website on my <Link link="https://github.com/sfmalloy">GitHub</Link> profile which has a whole bunch
          of random things, some of which are featured in the <span className="text-red">Projects</span> tab.
        </p>
        <p className="text-white delayed-fade m-8 text-2xl">
          Other than that I also enjoy playing video games, and music among other things.
        </p>
      </div>
    </div>
  );
}

function Projects(props: any) {
  return (
    <>
      <h1 className="text-white text-center py-4 text-6xl fall-animation">Web Projects</h1>
    </>
  );
}

function Games(props: any) {
  return (
    <>
      <h1 className="text-white text-center py-4 text-6xl fall-animation">Games</h1>
    </>
  );
}

function RandomStuff(props: any) {
  return (
    <>
      <h1 className="text-white text-center py-4 text-6xl fall-animation">Random Stuff</h1>
    </>
  );
}

function Link(props: LinkProps) {
  return (
    <a className="text-green hover:underline" href={props.link}>{props.children}</a>
  );
}

interface ContentProps {
  category: CategoryState;
}

interface LinkProps extends React.PropsWithChildren {
  link: string;
}

export default Content;
