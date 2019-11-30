import React, { Component } from 'react';
import { addGifUrl,   } from '../../apis'
import { getToken } from '../../auth'

export class gifadd extends Component {
    onChangeGif = (e) => {
        this.setState({[e.target.name]: e.target.value})    

    }
   

    addGif = (e) => {
        e.preventDefault();
       
       
        
       const token = getToken();
        const body =  new FormData(this.form);
        fetch(addGifUrl, 
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                  
                    "Authorization": token
                },
                body
                
                })
    
                .then(resp => resp.json())
                .then(data => { console.log(data)})
        }
    render() {
        return (
            <div>
            <form ref={el => (this.form = el)} onSubmit ={this.addGif} style={{width: '80%', paddingTop:'100px', paddingLeft:'200px'}}>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type= "text"
                name = "title" 
                placeholder="Article Title"
                className="form-control"
                />
                </div>
               
                <div className="form-group">
                <label htmlFor="gif">Gif</label>
                <input type="file" name='image' 
                className="form-control-file" />
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
}

export default gifadd
