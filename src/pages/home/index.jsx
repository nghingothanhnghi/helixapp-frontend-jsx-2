import React, { useState, useEffect } from "react";

import { getCategories } from '../../api/http-common'

import HeroComponent from '../../components/hero'
import LoadingComponent from "../../components/loading";
import CategoriesList from '../../components/categories-home'

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getCategories()
        .then((json) => {
          setCategories(json.data);
          console.log(json.data, 'CategoriesList');
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
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
        <h3 className="text-3xl font-bold tracking-tight leading-none md:text-2xl lg:text-3xl dark:text-white mb-8 text-black-600/75">
          What your are looking?
        </h3>
      {loading && <LoadingComponent/>}
      {!loading && categories.length ? (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((post, i) => (
            <CategoriesList key={i} post={post} ></CategoriesList>
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
