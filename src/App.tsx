import React from 'react';
import './App.css';
import * as Bootstrap from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
import { categories } from './hangmanconstants';

function getCategories() {
  return Object.values(categories);
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Bootstrap.Row>
        <Bootstrap.Col md={12}>
          <h2> THIS IS HANGMAN</h2>
        </Bootstrap.Col>
      </Bootstrap.Row>
      <Bootstrap.Row>
        <Bootstrap.Col md={1}>
          <Bootstrap.FormLabel>Select Category</Bootstrap.FormLabel>
          <DropdownList
            data={getCategories()}
            value={null}
            onChange={undefined}
            textField=""
            />  
        </Bootstrap.Col>
      </Bootstrap.Row>
      <Bootstrap.Row>
      <img alt="test" src={"./images/hang0.gif"}/>
      </Bootstrap.Row>
      
    </div>
  );
}

export default App;
