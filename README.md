# react-native-chiper

## Get a feed from >>> https://api.reddit.com/r/pics/hot.json
To obtain the list of posts of a subreddit use the following URL: https://api.reddit.com/r/pics/hot.json

For more information about the JSON structure see: https://github.com/reddit/reddit/wiki/JSON

## Sort Api by: New / Top / Popular / Hot
###### New >> fetch("https://www.reddit.com/r/" + subreddit +"/new.json")
###### Top >> fetch("https://www.reddit.com/r/" + subreddit +"/top.json")
###### Popular >> fetch("https://www.reddit.com/r/" + subreddit +"/controversial.json")
###### Hot >> fetch("https://www.reddit.com/r/" + subreddit +"/hot.json")

# Install:
#### 1> git clone this repo >>> 
#### run git clone https://github.com/ricaza81/ricaza81-react-native-chiper.git
#### 2> run npm install
#### 3> run npm start

# Using Fetch to Api Reddit
###### export default function App() {
###### const [articles, setArticles] = useState([]);
######  const [subreddit, setSubreddit] = useState('pics');
######  useEffect(() => {
######    fetch("https://www.reddit.com/r/" + subreddit +"/hot.json").then(
######      res => {
######        if (res.status !== 200) {
######          console.warn("Warning: Something is wrong with the api.");
######          return;
######        }
######        res.json().then(data => {
######          if (data != null)
######            setArticles(data.data.children);
######        });
######      }
######    )
######  }, [subreddit]);

# Run in Browser with Expo
#### After npm start please check > Run in web browser

![img](https://github.com/ricaza81/ricaza81-react-native-chiper/raw/master/browser.gif)

![img](https://github.com/ricaza81/ricaza81-react-native-chiper/raw/master/browser-4.gif)
