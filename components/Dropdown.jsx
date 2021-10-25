import React from 'react'
import Link from 'next/link'

class Dropdown extends React.Component {
    render() {
        return <div className="bg-green text-bg w-max rounded-lg p-2">
            <ul className="w-20 text-left mr-8">
                <Link href='/'>
                    <a className="block hover:underline" >About</a>
                </Link>
                <Link href='/work'>    
                    <a className="block hover:underline" >Work</a>
                </Link>
                <Link href='/resume'>
                    <a className="block hover:underline" >Resume</a>
                </Link>
                <Link href='https://github.com/chronoshivt'>
                    <a className="block hover:underline" >Github</a>
                </Link>
            </ul>
        </div>
    }
}

export default Dropdown;
