import { useState, useEffect } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState();

  function handleGetContacts(event) {
    fetch(`${import.meta.env.VITE_CANISTER_URL}/contacts`)
      .then(response => response.json()).then((json) => {
        console.log(json);
        setContacts(json);
      });
  }

//   useEffect(()=>{
//     handleGetContacts();
// }, [])
  

  return (
    <main>
      <form action="#" onSubmit={handleGetContacts}>
      <button id="contacts" type="submit">Get Contacts!</button>
      </form>
      <section id="contact_json">{JSON.stringify({contacts}, null, 2)}</section>

    </main >
  );
}

export default Contacts;