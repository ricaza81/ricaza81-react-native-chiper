import React from 'react';
import moment from 'moment';

function Article(props) {
  let base_url = 'https://reddit.com';

 if (props.article.thumbnail !== 0) {
           
         

  return (
    <article>
      <a href={ base_url + props.article.permalink } target="_blank">

      <div className="col-md-1">        
          <img className="thumbnail" src={props.article.thumbnail}/>
      </div>

     <div className="col-md-3">
        <h4>title: { props.article.title }</h4>
        <h5># votes: { props.article.score }</h5>
        <h5># comments: { props.article.num_comments }</h5>
        <h6>Creation: { moment(new Date(props.article.created_utc * 1000).toISOString().replace('T',' ').slice(0,16)).fromNow()}</h6>
     </div>
     
      </a>
    </article>
  )
}
}

export default Article;