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
            </div>
        <div className="py-8">
           <Image src={lyricfygif} />
        </div>
          </Section>

      </div>
    )
}

export default lyricfy
