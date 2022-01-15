import React from 'react';
import moment from 'moment';

function Article(props) {
  let base_url = 'https://reddit.com';

 if (props.article.thumbnail !== 0) {
           
         

  return (
    <article>
      <a href={ base_url + props.article.permalink } target="_blank">
     
         
           <div className="col-md-3">
           <span>
           <img  src={props.article.thumbnail}/>
           <h6>title: { props.article.title } | <br/> # votes: { props.article.score } | # comments: { props.article.num_comments } | Creation: { moment(new Date(props.article.created_utc * 1000).toISOString().replace('T',' ').slice(0,16)).fromNow()}</h6>
           </span>
           </div>
    
      </a>
    </article>
  )
}
}

export default Article;