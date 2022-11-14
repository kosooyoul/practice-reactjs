function Profile(props) {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <div style={{ display: 'inline-block', width: '64px', height: '64px', 'borderRadius': '100%', 'backgroundColor': '#ddd', 'boxShadow': '0px 0px 4px 0px black' }}></div>
      <div style={{ display: 'inline-block' }}>
        <p>{ props.item.name }</p>
        <p>
          <span>Followers { props.item.followers }</span>
          <span>Followings { props.item.followings }</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
