import { useQueries } from 'react-query';
import MomentumApis from '../apis/MomentumApis';
import TodoApis from '../apis/TodoApis';
import './Momentum.css'

const Momentum = () => {
  console.log('Initialize Momentum')

  const options = { refetchOnWindowFocus: true, retry: 1 }
  const results = useQueries([
    { queryKey: "fetchCurrentTime", queryFn: () => MomentumApis.fetchCurrentTime() },
    { queryKey: "fetchQuote", queryFn: () => MomentumApis.fetchQuote() },
    { queryKey: "fetchGreeting", queryFn: () => MomentumApis.fetchGreeting() },
    { queryKey: "fetchTodos", queryFn: () => TodoApis.fetchTodos() },
  ], options);

  const timeString = results[0].isSuccess? results[0].data: '00:00';
  const quote = results[1].isSuccess? results[1].data: {};
  const greeting = results[2].isSuccess? results[2].data: '';
  const todos = results[3].isSuccess? results[3].data: [];
  
  return (
    <div className='momentum'>
      <section>
        <p className='time'>{ timeString }</p>
        <p className='greeting'>{ greeting }</p>
        <ul>
          { todos.map(todo => <li key={ todo.id }><p className='todo'>{ todo.title }</p></li>) }
        </ul>
      </section>
      <section>
        <p className='author'>{ quote.author }</p> 
        <p className='content'>{ quote.content }</p> 
      </section>
    </div>
  );
}

export default Momentum;
