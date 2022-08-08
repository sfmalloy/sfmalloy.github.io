import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Left from './Left'
import Right from './Right'

const Home: NextPage = () => {
  return (
    <div>
      <Left />
      <Right />
    </div>
  );
}

export default Home
