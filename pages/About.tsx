import { Link } from './Common';

export default function About() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">About Me</h1>
        <p className="text-white delayed-fade m-8 text-2xl">
          <picture><img className="float-right rounded-full m-8" src="https://avatars.githubusercontent.com/u/31411598" alt="Picture of a man" /></picture>
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
