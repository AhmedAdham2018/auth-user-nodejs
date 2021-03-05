import React, {useEffect, useState} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './Footer';

function App() {

 const [name, setName] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8080/api/user', {
                  headers: {'Content-Type': 'application/json'}
              });

              const content = await response.json();

              setName(content.name);
          }
      )();
  });

  return (
    <BrowserRouter>
        <Navbar name={name} setName={setName} />
        <main>
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={() => <Login setName={setName}/>} />
          <Route path="/register" component={Register} />
        </main>
        <footer>
        <Box mt={8}>
          <Footer />
        </Box>
        </footer>
    </BrowserRouter>
  );
}

export default App;
