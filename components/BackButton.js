import React from 'react'
import Link from 'next/link'

const BackButton = ({ href = '/work', label = 'Back to work' }) => {
    return (
        <div className="px-4 mb-2 text-left">
            <Link href={href} scroll={false} aria-label={label} title={label} className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white hover:text-green hover:bg-white hover:bg-opacity-10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </Link>
        </div>
    )
}

export default BackButton
