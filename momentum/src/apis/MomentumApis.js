const MomentumApis = {
  fetchCurrentTime: async () => {
    let url = 'https://worldtimeapi.org/api/timezone/Asia/Seoul'
    const res = await fetch(url)
    const data = await Promise.resolve(res.json())
    
    if (!data) {
      return '00:00'
    }

    return data.datetime.substr(11, 5)
  },
  fetchQuote: async () => {
    let url = `https://api.quotable.io/random`
    const res = await fetch(url)
    const data = await Promise.resolve(res.json())

    if (!data) {
      return {}
    }

    return { author: data.author, content: data.content }
  },
  fetchGreeting: async () => {
    const greetings = [
      'Best wishes.',
      'Have a nice day!',
      'Good luck.',
      'How do you do?',
      'Pleased to meet you.',
      'Happy to meet you.',
      'What have you been up to?',
      'How are you?',
      'How are things?',
      'How are you feeling today?',
    ]

    const index = Math.floor(Math.random() * greetings.length)
    const result = greetings[index]

    return new Promise(resolve => setTimeout(() => resolve(result), 300)) // Test async
  }
}

export default MomentumApis
