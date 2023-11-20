import { useNavigate } from 'react-router-dom';
const SearchBarSM = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const onSubmit = () => {
        // sua lai duong dan truc tiep
        navigate(`?s=${searchQuery}`);

    };
    return (

        <form action="/search-result" method="get"
            autoComplete="off"
            onSubmit={onSubmit}>
            <div className="relative">
                <input value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)} type="search" id="header-search"
                    name="s" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                <button type="submit" className="sr-only focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    )
}
export default SearchBarSM

