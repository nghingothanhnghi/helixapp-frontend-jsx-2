import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroComponent from '../../components/hero'
import Announcer from '../../components/announcer';
import { getCategories } from '../../api/http-common';

const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];


function SearchResult() {

  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  console.log(query, "******** QUERY *********")
  console.log(filteredPosts, "******** FILTERED POSTS *********")
  return (
    <>
      <HeroComponent />
      <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="..."></div>
          <div className="md:col-span-2">
            <Announcer message={`${searchQuery.length} letters of results for "${query}"`} />
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id}>{post.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult
