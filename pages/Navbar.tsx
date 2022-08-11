import React, { Dispatch, SetStateAction } from "react";
import { CategoryState } from ".";

const Navbar = (props: NavbarProps) => {
  return (
    <div className=" object-scale-down w-[20%] h-screen fixed bg-primary float-left">
      <h1 className="text-white text-center py-4 font-extrabold 
        text-4xl md:text-5xl lg:text-6xl">Sean<br/>Malloy</h1>
      <div className="flex flex-col align-end justify-end">
        <NavbarButton {...props} category={CategoryState.ABOUT}>About Me</NavbarButton>
        <NavbarButton {...props} category={CategoryState.GAMES}>Games</NavbarButton>
        {/* <NavbarButton {...props} category={CategoryState.WEB}>Web Projects</NavbarButton> */}
        {/* <NavbarButton {...props} category={CategoryState.RANDOM}>Random</NavbarButton> */}
        <a className="my-4 mr-8 hover:mr-4 transition-all duration-75 ease-linear" href="https://github.com/sfmalloy">
          <picture><img className="float-right" src='/GitHub.png' width='64px' height='64px'/></picture>
        </a>
        <a className="my-4 mr-8 hover:mr-4 transition-all duration-75 ease-linear" href="https://woodmancodes.itch.io/">
          <picture><img className="float-right" src='/itchio.png' width='64px' height='64px'/></picture>
        </a>
      </div>
    </div>
  );
}

const NavbarButton = (props: ButtonProps) => {
  return (
    <div className="my-2 lg:my-2">
      <p 
        className="select-none cursor-pointer text-red text-right pr-8 text-2xl 
          md:text-3xl hover:pr-4 transition-all duration-75 ease-linear"
        onClick={() => props.setCategory(props.category)}
      >
        {props.children}
      </p>
    </div>
  );
}

interface NavbarProps {
  setCategory: Dispatch<SetStateAction<CategoryState>>
}

interface ButtonProps extends React.PropsWithChildren {
  setCategory: Dispatch<SetStateAction<CategoryState>>,
  category: CategoryState
}

export default Navbar;
