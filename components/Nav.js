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
                <a
                  href="https://github.com/chronoshivt"
                  aria-label="Visit Ryan Diaz's GitHub profile"
                  className="block rounded-md bg-green p-2 text-bg hover:bg-purple"
                >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <g display="none">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                      </g>
                      <path d="M12 .297a12 12 0 00-3.794 23.4c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.419-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.49 11.49 0 0112 3.004c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.814 1.103.814 2.222v3.293c0 .319.216.694.825.576A12.003 12.003 0 0012 .297z" />
                      </svg>
                </a>
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
