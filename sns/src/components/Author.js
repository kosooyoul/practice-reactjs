import { useState, useEffect } from 'react'
import UserApis from '../apis/UserApis'

function Author(props) {
  const [author, setAuthor] = useState({uuid: props.uuid})
  
  useEffect(() => {
    UserApis.fetchUserLite(props.uuid).then(author => setAuthor(author))
  }, [props.uuid])

  return (
    <div>
      <div style={{ display: 'inline-block', width: '40px', height: '40px', 'borderRadius': '100%', 'backgroundColor': '#ddd', 'boxShadow': '0px 0px 4px 0px black' }}></div>
      <span>{ author.name }</span>
    </div>
  );
}

export default Author;
