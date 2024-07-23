'use'
import Delete from '../delete-post/Delete'
import './style.css'


export default function Posts({id, title, content, authorName}) {
    return(
        <div className='posts'>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <Delete postId={id}/>
        </div>
    )
}