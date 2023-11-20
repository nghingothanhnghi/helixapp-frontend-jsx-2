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
import moment from "moment";

import BreadcrumbComponent from "../../components/breadcrumb";
import LoadingComponent from "../../components/loading";

import SearchBarSM from "../../components/searchbar-sm";

function PostDetail() {
    let { postId } = useParams();
    console.log(postId);
    //let post = getPost.find((post) => post.id === postId);
    // console.log(post);
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [post, setPost] = useState({});
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            axios.get(`https://api.chuotgreen.com/api/posts/${postId}`)
                .then((response) => {
                    setPost(response.data)
                    console.log(response.data, 'Post Component');
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.message);
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        JSON.stringify(post) !== '{}' ?
            <>
                <div className="pg-hd py-8 px-4 mx-auto max-w-screen-xl px-4">
                    <BreadcrumbComponent></BreadcrumbComponent>
                    <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
                        <div className="md:col-span-2">
                            <h1 className="mb-5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{post.data.attributes.title}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{moment(post.data.attributes.updatedAt).format('d MMM yyyy')}</p></div>
                        <div>
                            <SearchBarSM />
                        </div>
                    </div>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-2">
                            {post.data.attributes.description.map((description, index) => {
                                return (
                                    <p key={index} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {description.children[0].text}
                                    </p>);
                            })}
                            <div className="devide-hr"></div>
                        </div>
                        <div className="..."></div>
                    </div>
                </div>
            </> : <></>
    )
}

export default PostDetail
