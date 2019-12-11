import React from 'react'

export default function commentForm(props) {
    return (
        <div>
        <form onSubmit={props.addComment}>
                 

                    <button className='commentBtn'><img width='20%' style={{paddingRight:'8px'}} src="https://res.cloudinary.com/oluwamayowaf/image/upload/v1575396015/TeamWorkFE/comment_vector_1_aopggi.svg" alt="icon"/>
                        {' '}comment</button>
                        <input  name='addcomments'type='text'
                    value={props.addComments}
                    onChange={props.onChange}
                    style={{width:'100%'}}>
                    </input>

                </form>
            <hr/>
        </div>
    )
}
