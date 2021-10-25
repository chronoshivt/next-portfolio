import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import facedetecgif from '../../public/facedetecgif.gif'

function facedetect() {
    return (
        <div>

        <Section title="Face Detect">
        <div className="">
              <p className="text-justify">
                Face Detect uses the Clarifai API to detect all
                the faces in a picture.
                <br />
                Also dwadwadwaaaaaaaaaaaaaaaaaaaaaaaaaaa
                daw dwadwccz cz czx czc xzczxc
              </p>
              <ul className="mx-4 text-justify my-6">
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Website:
                    </span>
                    <a className="text-gray-light underline" href="https://face-detec1.herokuapp.com/">
                    https://face-detec1.herokuapp.com/
                    </a>
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
                    <a className="text-green underline" href="https://github.com/chronoshivt/facedetect" className="text-red-300">
                    https://github.com/chronoshivt/facedetect
                    </a>
                </li>
              </ul>
            </div>
        <div className="pb-8">
           <Image src={facedetecgif} />
        </div>
          </Section>

      </div>
    )
}

export default facedetect
