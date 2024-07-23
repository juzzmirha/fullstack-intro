'use client';
import './delete.css'
export default function Delete({postId}) {

    async function handleDelete(){
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE',   
            })
        } catch (error) {
            console.error(error)
        }
       
    }

    return (
        <button className="delete_btn" onClick={handleDelete}>Delete</button>
    )
}