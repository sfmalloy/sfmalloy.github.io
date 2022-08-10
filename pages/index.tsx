import type { NextPage } from "next"
import { useState } from "react"
import Navbar from "./Navbar"
import Content from "./Content"

export enum CategoryState {
  ABOUT,
  GAMES,
  WEB,
  RANDOM
}

const Home: NextPage = () => {
  const [category, setCategory] = useState(CategoryState.ABOUT);

  return (
    <div className="bg-primary">
      <Navbar setCategory={setCategory}/>
      <Content category={category}/>
    </div>
  );
}

export default Home;
