import React from 'react'
import { Gap, Link, TextArea, Upload } from '../../components/atoms'
import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'
import './createBlog.scss'
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
    const history = useHistory ();
    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Titile"/>
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
            <Button title="Save"/>
            </div>
        </div>
    )
}

export default CreateBlog
