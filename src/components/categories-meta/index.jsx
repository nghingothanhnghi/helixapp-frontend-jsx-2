import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function CategoriesMeta({ posts }) {
    console.log(posts, 'Meta Categories Component')
    return (
            <Link to={`/${posts.id}`} className="text-gray-900">
                {posts.attributes.posts.data.attributes} 
            </Link>
    );
};


