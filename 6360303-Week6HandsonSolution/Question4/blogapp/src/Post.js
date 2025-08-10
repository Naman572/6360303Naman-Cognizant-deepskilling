import React from 'react';
import './Styles/Styles.css';

function Post({title, body}){
    return(
        <div className='Post'>
 <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>
        </div> 
    );

}

export default Post;
