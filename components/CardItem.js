import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CardItem = ({ children, id, title, thumbnail }) => {
    return (
        <div className="w-full center mb-10">
            <Link href={`/work/${id}`} scroll={false}>
                <div className="group hover:cursor-pointer">
                    <Image 
                        src={thumbnail}
                        alt={title}
                        className="rounded-2xl transition duration-500 ease-out transform group-hover:-translate-y-1 group-hover:opacity-90"
                        loading="lazy"
                    />
                    <p className="text-xl text-white">
                        {title}
                    </p>
                    <p className="text-white text-md">
                        {children}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default CardItem
