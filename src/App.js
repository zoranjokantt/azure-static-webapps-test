import React, { useEffect } from 'react';

function App() {
  const value = 'World';

  useEffect(() => {
    fetch('http://localhost:7071/api/message', (res) => {
      console.log(res);
    })
  }, []);

  return <div>Hello {value}</div>;
}

export default App;
