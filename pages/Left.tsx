import React, { Dispatch, SetStateAction } from "react";
import { CategoryState } from ".";

const Navbar = (props: NavbarProps) => {
  return (
    <div className=" object-scale-down w-1/3 h-screen 2xl:w-1/4 fixed bg-primary float-left">
      <h1 className="text-white text-center py-4 font-extrabold 
        text-5xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl underline decoration-">Sean Malloy</h1>
      <div className="flex flex-col align-end justify-end">
        <NavbarButton {...props} category={CategoryState.ABOUT}>About Me</NavbarButton>
        <NavbarButton {...props} category={CategoryState.GAMES}>Games</NavbarButton>
        <NavbarButton {...props} category={CategoryState.WEB}>Web Projects</NavbarButton>
        <NavbarButton {...props} category={CategoryState.RANDOM}>Random</NavbarButton>
        <a href="https://github.com/sfmalloy"><img className="float-right my-4 mr-8 hover:mr-4 transition-all duration-75 ease-linear" src='/GitHub.png' width='64px' height='64px'/></a>
      </div>
    </div>
  );
}

const NavbarButton = (props: ButtonProps) => {
  return (
    <div className="my-4 lg:my-5">
      <p 
        className="select-none cursor-pointer text-red text-right pr-8 text-2xl 
          md:text-4xl hover:pr-4 transition-all duration-75 ease-linear"
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
