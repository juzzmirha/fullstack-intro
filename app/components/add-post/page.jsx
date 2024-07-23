'use client'
import styles from '@/app/page.module.css'
import './post.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter()

    const handleTitleChange = (event) =>{
        setTitle(event.target.value);
    }
    
    const handleContentChange = (event) =>{
        setContent(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            fetch('/api/addPost', {
                method: 'POST', 
                headers: {
                'Content-type' : 'appication/json'
            },
            body: JSON.stringify({title, content}) })
            router.refresh()
            router.push('/')
        } catch (error){
            console.error(error)
        }

        setTitle('');
        setContent('');
    }

    return(
        <main className={styles.main}>
            <h1>Add post</h1>
            <form onSubmit={handleSubmit}>
                <div className='form_input'>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input 
                    type="text"
                    id='title'
                    value={title}
                    onChange={handleTitleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea 
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                    required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <Link className='back_btn' href = '/'>Back</Link>
        </main>
    )
}