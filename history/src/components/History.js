import HistoryItem from './HistoryItem';
import './History.css'

const History = () => {

  const history = {
    id: '1',
    title: 'title',
    description: 'description',
    summaries: [
      { title: 'summary-1', description: 'description-1' },
      { title: 'summary-2', description: 'description-2' },
      { title: 'summary-3', description: 'description-3' },
    ]
  }

  return (
    <section>
      <h2>
        HISTORY
      </h2>
      <ul>
        <li>
          <HistoryItem item={history} />
        </li>
        <li>
          <HistoryItem item={history} />
        </li>
        <li>
          <HistoryItem item={history} />
        </li>
      </ul>
    </section>
  );
}

export default History;
