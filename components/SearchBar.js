// create a searchbar component
// the searchbar should have a search icon and a text input
// the searchbar should be responsive and collapse into a search icon on smaller screens
// use next components

import React from 'react';

export const SearchBar = () => {
    return (
        <div className="relative flex items-center justify-center">
        <input
            type="text"
            name="search"
            id="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            >
            <path
                fillRule="evenodd"
                d="M6.293 13.707a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L5 11.586l8.293-8.293a1 1 0 011.414 1.414l-9 9z"
                clipRule="evenodd"
            />
            </svg>
        </div>
        </div>
    );
    }