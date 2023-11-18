import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function PostsList({ posts }) {
    console.log(posts, 'Posts List Component')
    return (
        <li className="mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`posts/${posts.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{posts.attributes.title}</h5>
                {/* {posts.attributes.description.map((description, index) => {
                    return (
                        <p key={index} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {description.children[0].text}
                        </p>);
                })} */}
                        {posts.attributes.shortDescription}
            </Link>
        </li>
    );
};


