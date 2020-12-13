import React from 'react'
import {Post} from '../../assets';
import './detailBlog.scss';

const DetailBlog = () => {
    return (
        <div className="setail-blog-wrapper">
            <img className="img-cover" src={Post} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Content BLog</p>
        </div>
    )
}

export default DetailBlog
