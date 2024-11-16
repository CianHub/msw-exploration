import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);

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
    </div>
  );
}

export default App;
