import React from "react";
import Section from "../../components/Section";
import Image from "next/image";
import chatifyGif from "../../public/spotichat.gif";
import CardItem from "../../components/CardItem";
import aiGif from "../../public/ai_bot.gif";
function ai_agent() {
  return (
    <div className="w-full">
      <Section title="AI Twitter Agent">
        <p className="text-justify">
          LLM powered Twitter agent. Agent is able plan and make tweets, quote
          tweet, reply, like, retweet, follow/unfollow, and change it's own bio
          semi-autonomously (or fully). Design centered around emulating real
          user interactions through relevance based Vector DB memory retrieval
          and a 'personality' prompt.
        </p>
        <ul className=" text-justify my-6">
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
              Website:
            </span>
            <a
              className="text-gray-light underline"
              href="https://twitter.com/"
            >
              twitter.com
            </a>
          </li>
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">Date:</span>
            <p
              className="text-red-30"
             
            >
              January 2023
            </p>
          </li>
          <li className="flex">
            <span className="mr-2 bg-purple h-full px-0.5 bg-opacity-50">
              Stack:
            </span>
            <p className="text-red-30">
              NodeJS, Vector DB, OpenAI API, Puppeteer, Langchain.js
            </p>
          </li>
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">Github:</span>
            <a
              className="underline text-gray-light"
              href="https://github.com/chronoshivt/"
            >
              github.com/chronoshivt/
            </a>
          </li>
        </ul>

        <div className=" mb-8">
          <Image src={aiGif} />
          <p className="text-sm">
            Agent scrolling it's timeline, retrieving relevant memories, and
            making a decision on an action that is then confirmed by the user.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default ai_agent;
