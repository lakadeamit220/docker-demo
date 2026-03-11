import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-2xl">
      {data}
    </div>
  );
}

export default App;