import { useState } from 'react';

function CycleLedger() {
  const [ledger, setLedger] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${name}`)
      .then(response => response.json()).then((json) => {
        setLedger(json.greeting)
      });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main >
  );
}

export default App;