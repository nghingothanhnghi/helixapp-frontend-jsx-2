import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function CategoriesList({ post }) {
    console.log(post, 'Calegories List Component')
    return (
        <li className="col-span-1 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {post.attributes.Name}</h5>
            {/* {post.attributes.description.map((description, index) => {
                    return (
                        <p key={index} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {description.children[0].text}
                        </p>);
                })} */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.attributes.shortDescription}
            </p>
            <Link
                to={`/${post.id}`}
                className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
                Read more
            </Link>
        </li>
    );
};


