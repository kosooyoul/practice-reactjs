import './HistoryItem.css'

const HistoryItem = (props) => {
  return (
    <div className="root">
      <div className="pipe">
        <div className="circle">
          <h3 className="title">
            { props.item.title }
          </h3>
          <p className="description">
            { props.item.description }
          </p>
        </div>
      </div>
      <ul className="summaries">
        { props.item.summaries.map(summary =>
          <li key={ summary.id } className="summary">
            <h4 className="title">
              { summary.title }
            </h4>
            <p className="description">
              { summary.description }
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default HistoryItem;
