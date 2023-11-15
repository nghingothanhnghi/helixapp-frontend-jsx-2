import React, { useState, useEffect } from "react";

import { getCategories } from '../../api/http-common'

import HeroComponent from '../../components/hero'
import LoadingComponent from "../../components/loading";
import CategoriesList from '../../components/categories-home'

function Home() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getCategories()
        .then((json) => {
          setCategories(json.data);
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
      {loading && <LoadingComponent/>}
      {!loading && categories.length ? (
        <ul className="grid grid-cols-3 gap-4">
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
