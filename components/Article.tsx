import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Header from './components/Header';

function Article(props) {
  let base_url = 'https://reddit.com';

   const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('pics');
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit +"/hot.json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticles(data.data.children);
        });
      }
    )
  }, [subreddit]);

 if (props.article.thumbnail !== 0) {
           
         

  return (
   
    <header>
     <article>
        <input type="hidden" className="subreddit_input" onChange={e => setSubreddit(e.target.value)} value={subreddit} />
     
      <a href={ base_url + props.article.permalink } target="_blank">
     
         
           <div className="row" style={{ backgroundColor: '#eee', padding:10, paddingBottom: 37, borderRadius:10 }}>
          
           <img  src={props.article.thumbnail} style={{ width: 114, height: 100, float: 'left', padding:10 }}/>
           <h6 style={{ backgroundColor: '#eee', marginTop:3, }}> Title: { props.article.title } | <br/> Author: { props.article.author } | <br/> # votes: { props.article.score } | # comments: { props.article.num_comments } | Creation: { moment(new Date(props.article.created_utc * 1000).toISOString().replace('T',' ').slice(0,16)).fromNow()}</h6>
          
           </div>
    
      </a>
      </article>
      </header>
    
  )
}
}

export default Article;