import {
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useNavigate,
  useParams,
  useSubmit,
} from "react-router-dom";

import React, { useEffect, useState } from "react";
import PostsList from "../../../components/posts";
import LoadingComponent from "../../../components/loading";
import { getCategories, getFilterPosts } from '../../../api/http-common'

// const APIpath = "https://api.chuotgreen.com/api/posts?filters[$and][0][categories][Name][$eq]=API";

// const getData = await fetch(APIpath);
// const getRepo = await getData.json();
function CatePost() {
  const { cateId } = useParams();
  console.log(cateId);
  //const post = getFilterPosts.fetch((post) => post.id == cateId);
  // console.log(post);
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getFilterPosts()
        .then((res) => {
          setPosts(res.data);
          console.log(res.data, 'Posts List Component');
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
      <div className="pg-hd py-8 px-4 mx-auto max-w-screen-xl px-4">
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{JSON.stringify(cateId)}</h1>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
          <h3 className="text-2xl font-bold tracking-tight leading-none md:text-2xl lg:text-3xl dark:text-white mb-5 text-black-600/75">Get Started with {JSON.stringify(cateId)}</h3>

            {loading && <LoadingComponent />}
            {!loading && posts.length ? (
              <ul>
                {posts.map((post) => (
                  <PostsList key={post.id} posts={post}></PostsList>
                ))}
              </ul>
            ) : (
              !loading && <p>empty</p>
            )}
            {/* <ul>
              {posts.data.map((i, id) => {
                return (
                  <PostsList key={id} posts={i}></PostsList>
                );
              })}
            </ul> */}
          </div>
          <div className="..."></div>
        </div>
      </div>
    </>
  )
}

export default CatePost
