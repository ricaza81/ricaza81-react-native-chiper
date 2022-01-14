import React from 'react';

function Article(props) {
  let base_url = 'https://reddit.com';

 if (props.article.thumbnail !== 0) {
           
         

  return (
    <article>
      <a href={ base_url + props.article.permalink } target="_blank">

      <div class="col-md-1">        
          <img src={props.article.thumbnail} style={width:"10px"}/>
      </div>

     
        <h4>title: { props.article.title }</h4>
        <h3># votes: { props.article.score }</h3>
        <h3># comments: { props.article.num_comments }</h3>
        <h3>Creation: { new Date(props.article.created_utc)}</h3>
     
      </a>
    </article>
  )
}
}

export default Article;