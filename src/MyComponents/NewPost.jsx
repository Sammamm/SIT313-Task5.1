import React, {useState } from 'react'
import "./NewPost.css"
import Question from './Question'
import Article from './Article';


function NewPostSelector() {
  const [post, setPost] = useState(
    "question"
    
  )

  const handleClick = (e) =>{
      setPost(e.target.value)

  }
  
  return (
  <>
    <div className='newPost'>
        <h1 className="heading">New Post</h1>
        <div className="postType">
            <p>Selection Post Type:</p>
            <div className="button">
              <input 
              onClick={handleClick}
              type="radio" name="post1" value ="question" post = "question" />Question  
              
              <input 
              onClick={handleClick}
              type="radio" name="post1" value="article" post = "article" />Article
            </div>
        </div>
    </div>                      
   {  post === "question" ? 
        (<>
        <Article/>
     
         </>
        ): (  

          <> 
         <Question/>
        
         </>
          )
      }

    <h1>{post}</h1>
    </>
  );
}

export default NewPostSelector
    