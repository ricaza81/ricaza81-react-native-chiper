import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {ActivityIndicator, FlatList} from 'react-native';
import axios from 'axios';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from 'react';
import {useState, useEffect} from 'react';
import ApiContainer from './components/Screens/ApiContainer';
import Article from './components/Article';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const request = new Request('https://api.reddit.com/r/pics/hot.json');
  const url = request.url;
  const method = request.method;
  const credentials = request.credentials;

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
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        
     
        <StatusBar />

      </SafeAreaProvider>
    );
  }
}
