import React from 'react'

const Section = ({ children, title }) => {
    return (
        <div className="px-4 text-white pb-4">

            <div className="">
              <h3 className="text-2xl text-left underline my-2 mb-4">{title}</h3>
                {children}
            </div>
          </div>
    )
}

export default Section
