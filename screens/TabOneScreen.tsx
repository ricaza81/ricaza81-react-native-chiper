import { StyleSheet, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useState, useEffect} from 'react';
import Article from '../components/Article';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('pics');
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit +"/new.json").then(
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
     <ScrollView style={styles.containerProfil}>
      <Text style={styles.title}>New Post Reddit</Text>
      <Text style={styles.container}>
         {(articles != null) ? articles.map((article, index) => 
           <Article key={index} article={article.data}/>) : ''}
      </Text>
      </ScrollView>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  img: {
    flex:0.3,
    width:10
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    float: 'left'
  },
  title_rigth: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    float: 'rigth'
  },  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    fontSize: 20
  },
  tablist: {  
    paddingLeft: 0,
    fontSize: 20,
    position: 'absolute'
    //flex: true,
}
  /*articles: {
  padding: 30px 15px,
  background-color: #FFF,
  color: #212121,
},*/
});
