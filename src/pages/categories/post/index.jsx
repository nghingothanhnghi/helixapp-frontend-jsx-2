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
  const post = getCategories.find((post) => post.id == cateId);
  console.log(post)
  const navigate = useNavigate();
  return (
    <>
      <div>{post.id}</div>
    </>
  )
}

export default CatePost
