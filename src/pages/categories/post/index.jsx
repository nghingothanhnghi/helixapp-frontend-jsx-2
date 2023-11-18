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
import { getCategories, getFilterPosts } from '../../../api/http-common'

const APIpath = "https://api.chuotgreen.com/api/posts?filters[$and][0][categories][Name][$eq]=API";

const getData = await fetch(APIpath);
const getRepo = await getData.json();
function CatePost() {
  const { cateId } = useParams();
  console.log(cateId);
  //const post = getFilterPosts.fetch((post) => post.id == cateId);
  // console.log(post);
  // const navigate = useNavigate();
  return (
    <>
      <div className="pg-hd py-8 px-4 mx-auto max-w-screen-xl px-4">
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{JSON.stringify(cateId)}</h1>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <ul>
              {getRepo.data.map((i, id) => {
                return (
                  <PostsList key={id} posts={i}></PostsList>
                );
              })}
            </ul>
          </div>
          <div className="..."></div>
        </div>
      </div>
    </>
  )
}

export default CatePost
