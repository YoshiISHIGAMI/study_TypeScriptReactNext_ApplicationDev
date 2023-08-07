<h2>過去のメッセージ</h2>
<ul id="messages">
  {messages.map((message, index) => (
    <li key={index} dangerouslySetInnerHTML={{ __html: message }} />
  ))}
</ul>