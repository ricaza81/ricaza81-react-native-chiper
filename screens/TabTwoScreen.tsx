import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useState, useEffect} from 'react';
import Article from '../components/Article';

export default function TabTwoScreen() {
  
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Post Reddit</Text>
       <Text style={styles.score}>
         {(articles != null) ? articles.map((article, index) => 
           <Article key={index} article={article.data} 

           


           />) : ''}

      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
