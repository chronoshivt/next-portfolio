import Head from "next/head";
import React, { useState } from "react";
import "tippy.js/animations/scale.css";
import Link from "next/link";

import Image from "next/image";
import avi from "../public/avi.jpg";
import Article from "../components/Article";

export default function Home() {
  return (
    <Article className="flex flex-col items-center justify-center min-h-screen py-2 bg-bg">
      <Head>
        <title>Portfolio | RFD</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script defer src="https://analytics.livebeam.live/script.js" data-website-id="af6ae3ba-7bda-442e-99ae-c8e5087995b6"></script>     */}
      </Head>

      <main>
        <div className="pt-4">
          <article>
            <div className="px-4 text-white pb-4">
              {/* <div className="box-content rounded-lg bg-gray text-white border-green h-auto w-auto p-4 mx-6 mb-6 border-4">
              Hello, I'm a full-stack developer based in the US.
            </div> */}

              <div className="text-white">
                <div className="text-left">
                  <h2 className="text-3xl">Ryan Diaz</h2>
                  <p>AI / LLM Engineer · Computer Vision</p>
                </div>
                <div className="flex justify-center mt-8 h-auto w-auto">
                  <Image
                    className="rounded-full"
                    src={avi}
                    height={72}
                    width={72}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="text-2xl text-left underline my-2">Bio</h3>
                <p className="text-left">
                  Ryan Diaz is a software engineer and freelancer based in San
                  Antonio, Texas. He builds applied-AI products, LLM agents, and
                  computer-vision systems, along with the full-stack tools that
                  bring them to life. During his free time he enjoys making
                  electronic music.
                </p>
                <div className="my-6 align-center">
                  <Link href="/work">
                    <button className="rounded-full text-black bg-purple px-6 py-2 hover:bg-gray">
                      Work
                    </button>
                  </Link>
                </div>
              </div>
              <div className="">
                <h3 className="text-2xl text-left underline my-2">Stack</h3>
                <p className="text-left">
                  AI / ML: LLM agents, RAG, vector databases, PyTorch, TensorFlow,
                  scikit-learn, computer vision
                  <br />
                  Engineering: TypeScript, Python, React, Next.js, Node.js, Express,
                  Bun, REST APIs, WebSockets, Cloudflare Workers, AWS
                  <br />
                  Data / Delivery: PostgreSQL, MySQL, MongoDB, Supabase, Docker,
                  CI/CD, Playwright, Pandas, NumPy
                </p>
              </div>
              <div className="">
                <h3 className="text-2xl text-left underline my-2">Contact</h3>
                <div className="space-y-1 text-left">
                  <p>
                    Email: <a className="text-green underline" href="mailto:rfdraid@gmail.com">rfdraid@gmail.com</a>
                  </p>
                  <a
                    className="block w-fit text-green underline"
                    href="https://www.linkedin.com/in/ryan-d-737526219/"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </Article>
  );
}
