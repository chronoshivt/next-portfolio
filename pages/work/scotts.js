import React from 'react'
import Section from '../../components/Section'

function scotts() {
    return (
        <div>

        <Section title="Scotts NFT">
        <div className="">
              <p className="text-justify">
                Scotts NFT is a set of 1600 programtically generated
                NFT's minted on the Solana Blockchain. 
              </p>
              <ul className="mx-4 text-justify my-6">
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Website
                    </span>
                    <a className="text-gray-light underline" href="https://lyricfy1.herokuapp.com/">
                    https://lyricfy1.herokuapp.com/
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Stack
                    </span>
                    <a className="text-red-300">
                    React, TailwindCSS
                    </a>
                </li>
              </ul>
            </div>
        <div>
           
        </div>
          </Section>

      </div>
    )
}

export default scotts
