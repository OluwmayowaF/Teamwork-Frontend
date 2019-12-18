import React from 'react'

export default function addGifForm(props) {
    return (
        <div className='compContainer'>  
       
        <form className='addPost' onSubmit ={props.onSubmit} >
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type= "text"
                name = "title" 
                placeholder="Article Title"
                value={props.title}
                onChange={props.onChange}
                className="form-control"
                />
                </div>
               
                <div className="form-group">
                <label htmlFor="gif">Gif</label>
                <input type="file" name='gif' value={props.gif}
                onChange={props.onChange} className="form-control-file" />
                <br />
                </div>


               
                <div className="form-group">
                <input type="submit"
                value='submit'
                className="Login-btn"
                />
                </div>
                
                </form>
        </div>
    )
}
