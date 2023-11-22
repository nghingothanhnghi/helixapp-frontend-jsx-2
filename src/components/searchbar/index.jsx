import { useNavigate } from 'react-router-dom';
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const onSubmit = () => {
        // sua lai duong dan truc tiep
        navigate(`https://nghingothanhnghi.github.io/helixapp-frontend-jsx-2/search-result?s=${searchQuery}`);

    };
    return (
        <form action="/" method="get"
            autoComplete="off"
            onSubmit={onSubmit} className="flex flex-col mx-auto w-full max-w-md space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

            <input value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                name="s" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="typing your text here..." />
            <button type="submit" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:me-2 sm:ms-2 text-base font-medium">Search</button>

        </form>
    )
}
export default SearchBar

