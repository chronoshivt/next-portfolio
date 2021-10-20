import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import lyricfygif from '../../public/lyricfygif.gif'

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
            </div>
        <div className="py-8">
           <Image src={lyricfygif} />
        </div>
          </Section>

      </div>
    )
}

export default facedetect
