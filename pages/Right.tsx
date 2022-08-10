
import React, { useEffect, useState } from "react";
import { CategoryState } from ".";

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

function About() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">About Me</h1>
        <p className="text-white delayed-fade m-8 text-2xl">
          <img className="float-right rounded-full m-8" src="https://avatars.githubusercontent.com/u/31411598" alt="Picture of a man" />
          I graduated college in 2021 with a B.S. in Computer Science and am currently working
          as a software developer. Some side interests include:
          <ul className="list-disc list-inside pl-4 mt-8">
            <li>Game Development using the <Link link="https://unity.com/">Unity</Link> game engine</li>
            <li>Web Development with React and TypeScript (like <Link link="https://github.com/sfmalloy/sfmalloy.github.io"> this website</Link>)</li>
            <li>Compilers and Programming Languages</li>
            <li>Programming puzzles like ones from
              {' '}<Link link="https://adventofcode.com/">Advent of Code</Link>,
              {' '}<Link link="https://open.kattis.com/">Kattis</Link>, and
              {' '}<Link link="https://projecteuler.net">Project Euler</Link>
            </li>
            <li>Other random stuff in Python or C++</li>
          </ul>

        </p>
        <p className="text-white delayed-fade m-8 text-2xl">
          Other than those I also enjoy playing video games, and music among other things.
        </p>
      </div>
    </div>
  );
}

function Projects(props: any) {
  return (
    <>
      <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">Web Projects</h1>
    </>
  );
}

function Games(props: any) {
  return (
    <div>
      <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">Games</h1>
      <p className="text-white delayed-fade m-8 text-2xl">
        Currently my game development experience is made up of short Game Jam games both in school and for fun out of school. 
        These are some games I've made either on my own or as part of a small group.
      </p>
      <div className="m-8">
        <Game 
          title="The Bee Keeper" 
          link="https://woodmancodes.itch.io/the-bee-keeper" 
          img="/TheBeeKeeper.png" 
          alt="Cover art with a battery that's low">
            Created during the Brackey's Game Jam 2021.2 in one week. Here you play as a bee keeper trying to catch as many bees as 
            possible before time runs out! You have many tools at your disposal including saplings that grow trees which can have bee hives, 
            an axe for tree chopping, seeds for flowers to attract bees,
        </Game>
        <Game 
          title="Treasure Hunters" 
          link="https://woodmancodes.itch.io/treasure-hunter" 
          img="/TreasureHunter.png" 
          alt="Cover art with a battery that's low">
            Made for <Link link="https://ldjam.com/">Ludum Dare</Link> 48 in collaboration with my college roommate at the time who made all the art and sound effects. 
            This game is a small 2D platformer taking place in a cave where you go deeper and deeper to find the treasure at the end. There are multiple paths that
            you can explore and you have limited vision in the dark cave. Will you find the treasure? wait is this stretching the image 
        </Game>
        <Game 
          title="Charge The Battery" 
          link="https://woodmancodes.itch.io/charge-the-battery" 
          img="/ChargeTheBattery.png" 
          alt="Cover art with a battery that's low">
            Created for <Link link="https://ldjam.com/">Ludum Dare</Link> 50 in one weekend. This game is about frantically running around
            a library trying to keep your phone charged. You have to collect little electric pellets and run around finding outlets that work
            as your battery becomes lower quicker and quicker as time goes on.
        </Game>
      </div>
    </div>
  );
}

function RandomStuff(props: any) {
  return (
    <>
      <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">Random</h1>
    </>
  );
}

function Link(props: LinkProps) {
  return (
    <a className="text-green hover:underline" href={props.link}>{props.children}</a>
  );
}

function Game(props: GameProps) {
  return (
    <div className="flex flex-row py-8 delayed-fade">
      <a href={props.link} className="flex-shrink-0 self-center"><img src={props.img} alt={props.alt}/></a>
      <div className="px-4">
        <a href={props.link}><h2 className="pb-2 text-4xl text-green font-bold underline decoration-2">{props.title}</h2></a>
        <p className=" break-before-all text-white text-2xl">{props.children}</p>
      </div>
    </div>
  );
}

interface ContentProps {
  category: CategoryState;
}

interface LinkProps extends React.PropsWithChildren {
  link: string;
}

interface GameProps extends React.PropsWithChildren {
  link: string;
  img: string;
  alt: string;
  title: string;
}

export default Content;
