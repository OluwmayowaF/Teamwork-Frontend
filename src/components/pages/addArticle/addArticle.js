import React from 'react'

export default function addArticle(props) {
    return (
        <div>
            <form onSubmit ={props.onSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type= "text"
                name = "title" 
                placeholder="Article Title"
                value={props.title}
                onChange={props.onChange}
                className="form-control"
                required/>
                </div>
               
                <div className="form-group">
                <label htmlFor="article">article</label>
                <input type= "textarea"
                name = "article" 
                placeholder="Artcle details"
                value={props.article}
                onChange={props.onChange} 
                className="form-control"
                required/>
                <br />
                </div>

                <div className="form-group">
                <label htmlFor="category">Category</label>
                <input type= "text"
                name = "category" 
                placeholder="Optional enter a category"
                value={props.category}
                onChange={props.onChange}
                className="form-control"
                required/>
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
