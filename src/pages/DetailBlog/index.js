import React from 'react'
import {Post} from '../../assets';
import { Gap, Link } from '../../components';
import './detailBlog.scss';
import {useHistory} from 'react-router-dom';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="setail-blog-wrapper">
            <img className="img-cover" src={Post} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Content BLog</p>
            <Link title="Kembali ke home" onClick={() => history.push('/')}/>
            <Gap height="30px" />
        </div>
    )
}

export default DetailBlog
