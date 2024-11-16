import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const onSend = () => {
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
  };

  return (
    <div>
      <ul>
        {users?.map((user, idx) => (
          <li key={idx}>{user.name}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          id="message"
          value={content}
          onChange={handleChange}
        />

        <button onClick={onSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
