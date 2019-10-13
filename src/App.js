import React from 'react';
import Header from './component/header';
import Headline from './component/headline';

import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Doe',
  email: 'joedoe@gmail.com',
  age: 24,
  onlineStatus: true,
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline tempArr={tempArr} header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
