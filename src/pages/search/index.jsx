import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroComponent from '../../components/hero'
import PostsResult from '../../components/posts-result';
import CategoriesSide from '../../components/categoriesSide';
import Announcer from '../../components/announcer';
import LoadingComponent from '../../components/loading';
import { getCategories, getCategoriesSide, getPosts } from '../../api/http-common';


function SearchResult() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [posts, setData] = useState([]);
  const [categoriesSide, setCategoriesSide] = useState([]);

  useEffect(() => {
    getCategoriesSide()
      .then((json) => {
        setCategoriesSide(json.data);
        console.log(json.data, 'Posts Loaded');
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    getPosts()
      .then((json) => {
        setData(json.data);
        console.log(json.data, 'Posts Loaded');
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.attributes.title.toLowerCase();
      console.log(postName, "******** POSTNAME *********")

      return postName.includes(query);

    });
  };

  console.log(filterPosts, "******** filterPosts *********")

  const { search } = window.location;
  console.log(search, "******** SEARCH *********")
  const query = new URLSearchParams(search).get('s');
  const [searchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  console.log(query, "******** QUERY *********")
  console.log(searchQuery, "******** SEARCH QUERY *********")
  console.log(filteredPosts, "******** FILTERED POSTS *********")
  return (
    <>
      <HeroComponent />
      <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="...">
            <h3 className='text-2xl font-normal tracking-tight leading-none md:text-2xl lg:text-2xl dark:text-white mb-8 text-gray-500'>by Categories</h3>
            <ul className="space-y-2 font-medium">
              {categoriesSide.map((category, index) => (
                <li key={index}>
                  <CategoriesSide posts={category} />
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <Announcer message={`${filteredPosts.length} item(s) of results for "${query}"`} />
            {loading && <LoadingComponent />}
            {!loading && filteredPosts.length ? (
              <ul>
                {filteredPosts.map((attributes, id) => (
                  <PostsResult key={id} posts={attributes} />
                ))}
              </ul>
            ) : (
              !loading && <p>No item found here. Please try again!</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult
