import React from 'react'
import { Post } from '../../../assets'
import './blogitem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={Post} alt="post" />
            <div className="content-detail">
                <p className="title">Titile Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida diam dictum, ultricies sem nec, ultricies tortor. Quisque ornare euismod purus quis dictum. Etiam non felis vitae nibh venenatis scelerisque. Vivamus tempus suscipit orci,
                     nec bibendum libero rhoncus ut. Fusce massa odio</p>
            </div>
        </div>
    )
}

export default BlogItem
