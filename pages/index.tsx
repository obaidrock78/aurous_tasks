import Head from "next/head";
import Link from "next/link";
import TopHeader from "./topHeader";
import BottomHeader from "./bottomHeader";

import "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Task By Aurous</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://thegoodinside.com/wp-content/uploads/2020/01/cropped-TE-Sprout-220x220.png" sizes="192x192"></link>
        <link rel="icon" href="/favicon.ico" />
        <Link href="https://fonts.googleapis.com/css?family=Raleway:400,400italic,500,500italic,600,600italic,700,700italic,300italic,300&amp;display=swap" rel="stylesheet"/>
        <Link rel="icon" href="https://thegoodinside.com/wp-content/uploads/2020/01/cropped-TE-Sprout-45x45.png" />
        <Link rel="icon" href="https://thegoodinside.com/wp-content/uploads/2020/01/cropped-TE-Sprout-220x220.png" />
      </Head>

      <header>
        <TopHeader />
        <BottomHeader/>
      </header>
    </>
  );
}
