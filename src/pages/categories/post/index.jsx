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

import { getCategories } from '../../../api/http-common'
function CatePost() {
  const { cateId } = useParams();
  console.log(cateId);
  // const post = getCategories.find((post) => post.id == cateId);
  // console.log(post);
  // const navigate = useNavigate();
  return (
    <>
      <div className="pg-hd py-8 px-4 mx-auto max-w-screen-xl px-4">
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{JSON.stringify(cateId)}</h1>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
        <a href="#" className="max-w-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
      </div>


    </>
  )
}

export default CatePost
