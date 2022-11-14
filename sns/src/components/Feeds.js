import FeedItem from "./FeedItem";

function Feeds(props) {
  return (
    <div>
      { props.items.map(item => <FeedItem key={ item.id } item={ item } />) }
    </div>
  );
}

export default Feeds;
