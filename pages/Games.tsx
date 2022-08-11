import { Link } from './Common';

export default function Games() {
  return (
    <div>
      <h1 className="text-center py-4 text-6xl fall-animation text-red font-bold underline decoration-2">Games</h1>
      <p className="text-white delayed-fade m-8 text-2xl">
        Currently my game development experience is made up of short Game Jam games both in school and for fun out of school.
        These are some games I've made either on my own or as part of a small group. Click the picture or title to go to the
        page for that game! Every game here currently is made with the <Link link="https://unity.com">Unity</Link> game engine.
      </p>
      <div className="m-8">
        <Game
          title="The Bee Keeper"
          link="https://woodmancodes.itch.io/the-bee-keeper"
          img="/TheBeeKeeper.png"
          alt="A pixel art man chasing a bee with a net.">
          <ul className="list-disc pl-8">
            <li>Created for Brackey's Game Jam 2021.2</li>
            <li>Chaotically fast clicker-type game where you attract and catch bees using various tools before time runs out!</li>
          </ul>
        </Game>
        <Game
          title="ADOY"
          link="https://github.com/mucsci-students/2021sp-475-ADOY"
          img="/ADOY.png"
          alt="Cover art containing the word ADOY">
          <ul className="list-disc pl-8">
            <li>A game about a mysterious, spooky creature that chases you through a maze.</li>
            <li>Collect all 8 floating eggs to win the game before <strong>he</strong> catches you</li>
            <li>Made as a school project in a group</li>
          </ul>
        </Game>
        <Game
          title="Treasure Hunter"
          link="https://woodmancodes.itch.io/treasure-hunters"
          img="/TreasureHunter.png"
          alt="A cave with an opening containing a treasure chest with a light shining on it.">
          <ul className="list-disc pl-8">
            <li>Created for <Link link="https://ldjam.com">Ludum Dare</Link> 48</li>
            <li>Small 2D platform where you go deeper and deeper into a cave to find the treasure that lies inside!</li>
            <li>Explore multiple paths as you find your way down the dark cave!</li>
            <li>I did the code and title screen music, and my roommate at the time did all the art</li>
          </ul>
        </Game>
        <Game
          title="Mecha Reactor"
          link="https://github.com/Simplicity-Studios/mecha-reactor"
          img="/mecha.png"
          alt="Cover art with some buttons and a health meter"
        >
           <ul className="list-disc pl-8">
            <li>A top down 2D shooter where you are a mech with various reactor powers that you use to fight your way to the end.</li>
            <li>Includes many levels each with increasing difficulty.</li>
            <li>Ends with a special final boss to test and see if you mastered your skills!</li>
          </ul>
        </Game>
        <Game
          title="Charge The Battery"
          link="https://woodmancodes.itch.io/charge-the-battery"
          img="/ChargeTheBattery.png"
          alt="Cover art with a battery that's low">
          <ul className="list-disc pl-8">
            <li>Created for Ludum Dare 50 in one weekend</li>
            <li>Collect energy pellets and run towards different outlets that are constantly breaking!</li>
            <li>Frantically run around the library to keep your battery charged!</li>
          </ul>
        </Game>
        <Game
          title="Low Poly Odyssey"
          link="https://woodmancodes.itch.io/charge-the-battery"
          img="/lowpolyodyssey.png"
          alt="Low poly space man">
          <ul className="list-disc pl-8">
            <li>A game about delivering packages in space.</li>
            <li>Fly around delivering packages and finding repair points around your space station as quickly as possible to get the high score!</li>
          </ul>
        </Game>
      </div>
    </div>
  );
}

function Game(props: GameProps) {
  return (
    <div className="flex flex-row py-8 delayed-fade">
      <a href={props.link} className="flex-shrink-0 self-center"><img className="w-[315px] h-[250px] object-contain" src={props.img} alt={props.alt} /></a>
      <div className="px-4 max-w-4xl">
        <a href={props.link}><h2 className="pb-2 text-4xl text-green font-bold underline decoration-2">{props.title}</h2></a>
        <p className=" break-before-all text-white text-2xl">{props.children}</p>
      </div>
    </div>
  );
}

interface GameProps extends React.PropsWithChildren {
  link: string;
  img: string;
  alt: string;
  title: string;
}

