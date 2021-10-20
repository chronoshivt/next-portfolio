import Head from 'next/head'
import React, { useState } from 'react';
import 'tippy.js/animations/scale.css';
import Link from 'next/link';

import Image from 'next/image'
import avi from '../public/avi.jpg'

export default function Home() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        
        
        <div className="pt-4">

        <article>
          <div className="px-4 text-white pb-4">
            <div className="box-content rounded-lg bg-gray-700 text-white border-green-300 h-auto w-auto p-4 mx-6 mb-6 border-4">
              Hello, I'm a full-stack developer based in San Antonio.
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
                Ryan Diaz is a full-stack developer based in the US. with a passion for building
                digital services/stuff he wants. He has a knack for all things launching products, from planning
                and designing all the way to solving real-life problems with code. When not online, he loves hanging
                out with his camera. Currently, he is living off of his own product called Inkdrop. 
              </p>
              <div className="my-6 align-center">
                <Link href="/work">
                  <button className="rounded-full text-black bg-green-200 px-6 py-2 hover:bg-green-400">My work</button>
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl text-left underline my-2">Work</h3>
              <p className="text-justify">
                Ryan Diaz is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. 
              </p>
            </div>
          </div>
        </article>
        </div>
               
      </main>
    </div>
  )
}
