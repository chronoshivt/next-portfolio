import Head from 'next/head'
import React, { useState } from 'react';
import 'tippy.js/animations/scale.css';
import Link from 'next/link';

import Image from 'next/image'
import avi from '../public/avi.jpg'
import Article from '../components/Article';

export default function Home() {


  return (
    <Article className="flex flex-col items-center justify-center min-h-screen py-2 bg-bg">
      <Head>
        <title>Portfolio | RFD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        
        
        <div className="pt-4">

        <article>
          <div className="px-4 text-white pb-4">
            <div className="box-content rounded-lg bg-gray text-white border-green h-auto w-auto p-4 mx-6 mb-6 border-4">
              Hello, I'm a full-stack developer based in the US.
            </div>

            <div className="text-white">
              <div className="text-left">
                <h2 className="text-3xl">Ryan Diaz</h2>
                <p>
                  Artist / Developer / Student
                </p>
              </div>
              <div className="relative mt-8 h-auto w-auto">
                  <Image className="rounded-full" src={avi} height={64} width={64} />
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl text-left underline my-2">Bio</h3>
              <p className="text-justify">
                Ryan Diaz is a full-stack developer and student working in the United States. Currently he is working towards
                a Bachelors Degree in Computer Science with a focus in machine learning. During his free time he enjoys studying 
                blockchain technology and Web3.
              </p>
              <div className="my-6 align-center">
                <Link href="/work">
                  <button className="rounded-full text-black bg-purple px-6 py-2 hover:bg-gray">My work</button>
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl text-left underline my-2">Stack</h3>
              <p className="text-justify">
                Front-end: React, NextJS, TailwindCSS, Javascript, HTML, CSS
                <br />
                Back-end: NodeJS, Express, PostgreSQL
                <br />
                Etc: Web3, Truffle, Solidity

              </p>
            </div>
          </div>
        </article>
        </div>
               
      </main>
    </Article>
  )
}
