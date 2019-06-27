import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <SignUpForm />
      </header>
    </div>
  );
}

export default App;
