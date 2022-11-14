import Author from "./Author"

function FeedItem(props) {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <Author uuid={ props.item.authorUuid } />
      <p>
        <small>{ props.item.createdAt }</small>
        <small>{ props.item.location }</small>
        <small>{ props.item.readable }</small>
      </p>
      { props.item.text && <p>{ props.item.text }</p> }
      { props.item.link && <p>🌍 { props.item.link }</p> }
      { props.item.image && <p>🎨 { props.item.image }</p> }
      { props.item.video && <p>🎬 { props.item.video }</p> }
    </div>
  );
}

export default FeedItem;
