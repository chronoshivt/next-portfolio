import React from 'react'
import Image from 'next/image'
import japan from '../public/japan.png'

function Japan() {
    return (
        <div className="w-auto m-auto">
          <Image className="rounded-xl" src={japan} height={280} width={280}/>
        </div>
    )
}

export default Japan
