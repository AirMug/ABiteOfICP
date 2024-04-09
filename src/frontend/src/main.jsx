import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Contacts from './Contacts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />,
    <Contacts />,
  </React.StrictMode>,
);

// export default function AppWhole() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           {/* <Route index element={<Home />} /> */}
//           <Route path="contacts" element={<Contacts />} />
//           {/* <Route path="contact" element={<Contact />} /> */}
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppWhole />);
