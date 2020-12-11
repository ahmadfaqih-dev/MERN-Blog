import React from 'react'
import { Gap, TextArea, Upload } from '../../components/atoms'
import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div className="blog-post">
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
