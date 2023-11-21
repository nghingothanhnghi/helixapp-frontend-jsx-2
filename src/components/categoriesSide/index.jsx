import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function CategoriesSide({ posts }) {
    console.log(posts, 'Categories List Component')
    return (
            <Link to={`/${posts.id}`} className="flex items-center py-3 px-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                {posts.attributes.Name} 
            </Link>
    );
};


