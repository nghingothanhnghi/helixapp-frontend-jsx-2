import React, { useState, useEffect } from "react";

import { getCategories } from '../../api/http-common'
import HeroComponent from '../../components/hero'
import CategoriesList from '../../components/categories-home'

function Home() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([0]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getCategories()
        .then((json) => {
          setCategories(json.data);
          //setSearchResults(json);
          console.log(json.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <HeroComponent></HeroComponent>
      <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
      {loading && <p>loading....</p>}
      {!loading && categories.length ? (
        <ul className="grid grid-cols-3 gap-4">
          {categories.map((posts, i) => (
            <CategoriesList key={i} Name={posts.Name} id={posts.id}></CategoriesList>
          ))}
        </ul>
      ) : (
        !loading && <p>empty</p>
      )}
      </div>

    </>
  )
}

export default Home
