//import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {ActivityIndicator, FlatList,StyleSheet, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from 'react';
import { useState, useEffect } from 'react';
import Article from './components/Article';
import './index.css';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
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
  

  if (!isLoadingComplete) {
    return null;
  } else {
    let base_url = 'https://reddit.com';
    return (
      
      <SafeAreaProvider style={styles.containerProfil}>
      
        <Navigation colorScheme={colorScheme}>
       <ScrollView style={styles.containerProfil} />
       </Navigation>
         
        <StatusBar>
        <ScrollView style={styles.containerProfil} />
        </StatusBar>
       
      </SafeAreaProvider>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerProfil: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'unset',
    padding: 0,
  },
  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
