<html>
  <head>...</head>
  <body>
    <h1>掲示板</h1>
    <h2>メッセージを送信</h2>
    <div>
      <textarea id="input-message" name="message" rows="3" style="display: block;"></textarea>
      <button onclick="onSubmit()">送信</button>
    </div>
    <h2>過去のメッセージ</h2>
    <ul id="messages">
      <!-- JavaScriptを使って動的にメッセージを追加する -->
    </ul>
  </body>
  <script>
    const onSubmit = (e) => {
      // ...APIにメッセージを投稿する
    }

    const showMessages = () => {
      // APIからメッセージを取得
      // APIは過去のメッセージのリストを返す
      fetch('http://localhost:8000/messages')
      .then(response => response.json())
      .then(messages => {
        for(const message of messages) {
          const messagesContainer = document.getElementById('messages')
          const messageContainer = document.createElement('li')
          // innerHTMLに代入することで、liタグの中にメッセージを表示する
          messageContainer.innerHTML = message
          messagesContainer.appendChild(messageContainer)
        }
      })
    }

    // ページが読み終わった段階で、APIからメッセージを取得して表示する
    showMessages()
  </script>
</html>