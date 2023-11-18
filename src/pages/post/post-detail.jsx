import {
    useLoaderData,
    Form,
    redirect,
    useNavigation,
    useNavigate,
    useParams,
    useSubmit,
} from "react-router-dom";

import axios from "axios";

import React, { useEffect, useState } from "react";

import BreadcrumbComponent from "../../components/breadcrumb";


function PostDetail() {
    let { postId } = useParams();
    console.log(postId);
    //let post = getPost.find((post) => post.id === postId);
    // console.log(post);
    // const navigate = useNavigate();
    const [post, setPost] = useState([0]);
    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get(`https://api.chuotgreen.com/api/posts/${postId}`)
                .then((response) => {
                    setPost(response.data)
                    console.log(response.data, 'Post Component');
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.message);
                })
                .finally(() => {
                });
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className="pg-hd py-8 px-4 mx-auto max-w-screen-xl px-4">
                <BreadcrumbComponent></BreadcrumbComponent>
                <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    {post.data.attributes.title}
                </h1>
                <div className="text-sm text-gray-500 dark:text-gray-400 ">{post.data.attributes.updatedAt}</div>
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        {post.data.attributes.description.map((description, index) => {
                            return (
                                <p key={index} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {description.children[0].text}
                                </p>);
                        })}
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

export default PostDetail
