const TodoApis = {
  fetchTodos: async () => {
    const todos = [
      { 'id': '1', 'title': 'Drink 2 liters of water.' },
      { 'id': '2', 'title': 'Study Lean Startup Bible.' },
      { 'id': '3', 'title': 'Setup SSO.' },
    ]

    const result = todos

    return new Promise(resolve => setTimeout(() => resolve(result), 300)) // Test async
  }
}

export default TodoApis
