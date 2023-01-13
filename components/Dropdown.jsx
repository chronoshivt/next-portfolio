import React from 'react'
import Link from 'next/link'

class Dropdown extends React.Component {
    render() {
        return <div className="bg-green text-bg w-max rounded-lg p-2">
            <ul className="w-20 text-left mr-8">
                <Link href='/'>
                    <p className="block hover:underline" >About</p>
                </Link>
                <Link href='/work'>    
                    <p className="block hover:underline" >Work</p>
                </Link>
                <Link href='/resume'>
                    <p className="block hover:underline" >Resume</p>
                </Link>
                <Link href='https://github.com/chronoshivt/next-portfolio'>
                    <p className="block hover:underline" >Github</p>
                </Link>
            </ul>
        </div>
    }
}

export default Dropdown;
