import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import chatifyGif from '../../public/spotichat.gif'
import CardItem from '../../components/CardItem'

function chatify() {
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
                    <a className="text-gray-light underline" href="https://chatifymono.vercel.app/">
                    https://chatifymono.vercel.app/
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Stack:
                    </span>
                    <a className="text-red-300">
                    Next.js, Express, NodeJS, SocketIO, Spotify API
                    </a>
                </li>
                {/* <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Github:
                    </span>
                    <a className="underline text-gray-light" href="https://github.com/chronoshivt/lyricfy">
                    https://github.com/chronoshivt/lyricfy
                    </a>
                </li> */}
              </ul>
          
        <div className=" mb-8">
        <Image src={chatifyGif} />
        </div>
          </Section>

      </div>
    )
}

export default chatify
