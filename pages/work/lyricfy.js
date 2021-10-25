import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import lyricfygif from '../../public/lyricfygif.gif'
import CardItem from '../../components/CardItem'

function lyricfy() {
    return (
        <div className="w-full">

        <Section title="Lyricfy">
      
              <p className="text-justify">
                Lyricfy opens a new tab with the Genius lyrics
                page of the currently playing song on Spotify.
              </p>
              <ul className=" text-justify my-6">
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Website:
                    </span>
                    <a className="text-gray-light underline" href="https://lyricfy1.herokuapp.com/">
                    https://lyricfy1.herokuapp.com/
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Stack:
                    </span>
                    <a className="text-red-300">
                    React, Express, NodeJS, Genius API, Spotify API
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Github:
                    </span>
                    <a className="underline text-gray-light" href="https://github.com/chronoshivt/lyricfy">
                    https://github.com/chronoshivt/lyricfy
                    </a>
                </li>
              </ul>
          
        <div className=" mb-8">
        <Image src={lyricfygif} />
        </div>
          </Section>

      </div>
    )
}

export default lyricfy
