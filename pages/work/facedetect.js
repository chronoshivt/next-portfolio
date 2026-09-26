import React from "react";
import Section from "../../components/Section";
import BackButton from "../../components/BackButton";
import Article from "../../components/Article";
import Image from "next/image";
import facedetecgif from "../../public/facedetecgif.gif";

function facedetect() {
  return (
    <Article>
      <BackButton />
      <Section title="Face Detect">
        <div className="">
          <p className="text-left">
            Face Detect uses the Clarifai API to detect all the faces in a
            picture.
            <br />
            Login password encrypted with Bcrypt and stored in SQL database
            using Postgres.
          </p>
          <ul className="mx-4 text-left my-6">
            <li>
              <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                Website:
              </span>
              <a
                className="text-gray-light underline"
                href="https://face-detec1.herokuapp.com/"
              >
                https://face-detec1.herokuapp.com/
              </a>
            </li>
            <li>
              <span className="mr-2 bg-purple px-0.5 bg-opacity-50">Date:</span>
              <p className="text-red-30">May 2021</p>
            </li>
            <li>
              <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                Stack:
              </span>
              <a className="">
                React, Clarifai API, Express, PostgreSQL, NodeJS
              </a>
            </li>
            <li>
              <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                Github:
              </span>
              <a
                className="text-gray-light underline"
                href="https://github.com/chronoshivt/facedetect"
              >
                https://github.com/chronoshivt/facedetect
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <Image src={facedetecgif} />
        </div>
      </Section>
    </Article>
  );
}

export default facedetect;
