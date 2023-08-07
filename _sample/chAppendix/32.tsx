const Page = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/messages')
      const messages = await response.json()
      setMessages(messages)
    })()
  })

  const [inputMessage, setInputMessage] = useState('')
  const onInputMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputMessage(e.target.value)
    },
    []
  )

  const onSubmit = useCallback(() => {
    // メッセージをAPIに送信する
    ...
  }, [inputMessage])

  return (
    <div>
      <h1>掲示板</h1>
      <h2>メッセージを送信</h2>
      <div>
        <textarea
          name="message"
          rows={3}
          value={inputMessage}
          onChange={onInputMessageChange}
          style={{ display: 'block' }}
        />
        <button onClick={onSubmit}>送信</button>
      </div>
      <h2>過去のメッセージ</h2>
      <ul id="messages">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  )
}