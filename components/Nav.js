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
                    <p>Ryan Diaz</p>
                  </span>
                </a>
              </h1>
            </div>

            <div className="w-full self-center flex justify-end">
              <div>
                <button className="rounded-md bg-green text-bg hover:bg-purple p-2">
                    <a href="https://github.com/chronoshivt">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                      </svg>
                    </a>
                </button>
              </div>
              <div className="ml-4">
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