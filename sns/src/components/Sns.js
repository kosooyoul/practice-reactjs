import { useState, useEffect } from 'react'
import Feeds from "./Feeds";
import Profile from "./Profile";
import UserApis from "../apis/UserApis";
import FeedApis from "../apis/FeedApis";

const getQueryObject = () => {
  return window.location.search.split(/[&?]/g).reduce((result, pair) => {
    const [key, value] = pair.split('=')
    result[key] = value
    return result
  }, {})
}

const Sns = () => {
  const queryObject = getQueryObject()
  const uuid = queryObject['uuid']

  const [ feeds, setFeeds ] = useState([])
  const [ profile, setProfile ] = useState({})

  useEffect(() => {
    UserApis.fetchUserProfile(uuid).then(feeds => setProfile(feeds))
    FeedApis.fetchFeeds(uuid).then(feeds => setFeeds(feeds))
  }, [uuid])
  
  return (
    <div>
      <Profile item={ profile } />
      <Feeds items={ feeds } />
    </div>
  );
}

export default Sns;
