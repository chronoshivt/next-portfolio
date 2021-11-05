import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import booksgif from '../../public/googlebooksgif.gif'
import CardItem from '../../components/CardItem'

function googlebooks() {
    return (
        <div className="w-full">

        <Section title="Google Books">
      
              <p className="text-justify">
                Searches Google for matching book titles.
                Uses Axios to make GET request.
              </p>
              <ul className=" text-justify my-6">
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Website:
                    </span>
                    <a className="text-gray-light underline" href="https://booksearch1.vercel.app/">
                    https://booksearch1.vercel.app/
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Stack:
                    </span>
                    <a className="text-red-300">
                    React, Google Books API, TailwindCSS
                    </a>
                </li>
                <li>
                    <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
                        Github:
                    </span>
                    <a className="underline text-gray-light" href="https://github.com/chronoshivt/booksearch1">
                    https://github.com/chronoshivt/booksearch1
                    </a>
                </li>
              </ul>
          
        <div className=" mb-8">
        <Image src={booksgif} />
        </div>
          </Section>

      </div>
    )
}

export default googlebooks
