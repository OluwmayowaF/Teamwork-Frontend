import React from 'react'

export default function addArticleform(props) {
    return (
        <div  style={{width: '80%', float:'right', padding:'5%'}}>
            <h4 className='text-center text-primary'>Add an Article</h4>
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
                <label htmlFor="article">Article</label>
                <textarea 
                name = "article" 
                placeholder="Start Writting..."
                rows='5'
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
                value={props.AddBtnUx}
                className="Login-btn"
                />
                </div>
                
                </form>

            
        </div>
    )
}
