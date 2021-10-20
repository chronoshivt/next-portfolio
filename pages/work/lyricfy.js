import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import lyricfygif from '../../public/lyricfygif.gif'

function lyricfy() {
    return (
        <div>

        <Section title="Lyricfy">
        <div className="">
              <p className="text-justify">
                Lyricfy opens a new tab with the Genius lyrics
                page of the currently playing song on Spotify.
              </p>
              <ul className="mx-4 text-justify my-6">
                <li>
                    <span className="mr-2 bg-red-300 px-0.5 bg-opacity-50">
                        Website
                    </span>
                    <a className="text-red-300" href="https://lyricfy1.herokuapp.com/">
                    https://lyricfy1.herokuapp.com/
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-red-300 px-0.5 bg-opacity-50">
                        Stack
                    </span>
                    <a className="text-red-300">
                    React, Express, NodeJS, Genius API, Spotify API
                    </a>
                </li>
              </ul>
            </div>
        <div className="by-8">
           <Image src={lyricfygif} />
        </div>
          </Section>

      </div>
    )
}

export default lyricfy
