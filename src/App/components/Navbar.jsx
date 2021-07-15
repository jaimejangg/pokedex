import ToggleTheme from "../theme/ToggleTheme";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 dark:bg-white">
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <NavLink
                  to="/documentation"
                  className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <MenuIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Documentation
                </NavLink>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
