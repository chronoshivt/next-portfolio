import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';
import Dropdown from './Dropdown';

const Nav = () => {
    return (
        <div className="">
            <nav className="fixed text-white bg-bg w-full top-0 left-0 z-10 bg-opacity-25 backdrop-filter backdrop-blur shadow-md md:px-12 lg:px-72">
          <div className="p-4 flex">
            <div className="w-full flex items-center">
              <h1 className="text-xl">
                <a href="/">
                  <span className="flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>chronoshivt</p>
                  </span>
                </a>
              </h1>
            </div>

            <div className="w-full self-center flex justify-end">
              <div>
                <Tippy content={<Dropdown />} placement="bottom-end" trigger="click" interactive="true" animation="scale" inertia="true">
                  <button className="rounded-md bg-purple hover:bg-green p-2 hover:text-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </Tippy>
              </div>
            </div>
          </div>
        </nav>
        </div>
    )

}

export default Nav
