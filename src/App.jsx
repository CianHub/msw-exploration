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
      </div>
    </div>
  );
}

export default App;
