import { useEffect, useState } from 'react'
import MomentumApis from '../apis/MomentumApis';
import TodoApis from '../apis/TodoApis';
import './Momentum.css'

const Momentum = () => {
  console.log('Initialize Momentum')

  const [timeString, setTimeString] = useState('');
  const [quote, setQuote] = useState({ author: '', content: '' })
  const [greeting, setGreeting] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    MomentumApis.fetchCurrentTime().then(time => setTimeString(time))
    MomentumApis.fetchQuote().then(({ author, content }) => setQuote({ author: author, content: content }))
    MomentumApis.fetchGreeting().then(greeting => setGreeting(greeting))
    TodoApis.fetchTodos().then(todos => setTodos(todos))
  }, [])

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
