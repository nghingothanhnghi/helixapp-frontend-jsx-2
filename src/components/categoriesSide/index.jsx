import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function CategoriesSide({ posts }) {
    console.log(posts, 'Categories List Component')
    return (
            <Link to={`/${posts.id}`}>
                {posts.attributes.title} 
            </Link>
    );
};


