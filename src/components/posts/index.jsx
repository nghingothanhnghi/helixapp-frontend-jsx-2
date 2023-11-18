import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function PostsList({ posts }) {
    console.log(posts, 'Posts List Component')
    return (
        <Link className="max-w-sm">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
    );
};


