import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from "../searchbar";

export default function HeroComponent() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <>
            <section className="bg-slate-100">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <p className="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Welcome to the Help Center </p>
                    <h1 className="mb-10  text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">How can we help?</h1>
                    <SearchBar searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery} />
                </div>
            </section>
        </>
    );
}

