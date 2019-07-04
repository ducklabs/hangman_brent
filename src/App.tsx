import React from 'react';
import './App.css';
import * as Bootstrap from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
import { categories } from './hangmanconstants';


function getCategories(): string[] {
  return Object.keys(categories)
    .filter(k => typeof categories[k as any] === "number") as string[];
}

function displayWordFromCategory(val: string) {
  console.log(val);
  return "im the word";
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Bootstrap.Row>
      <Bootstrap.Col></Bootstrap.Col>
        <Bootstrap.Col md={2}>
          <h2> THIS IS HANGMAN</h2>
        </Bootstrap.Col>
        <Bootstrap.Col></Bootstrap.Col>
      </Bootstrap.Row>
      <Bootstrap.Row>
        <Bootstrap.Col></Bootstrap.Col>
        <Bootstrap.Col md={2}>
          <Bootstrap.FormLabel>Select Category</Bootstrap.FormLabel>
          <DropdownList
            data={getCategories()}
            onChange={(val) => displayWordFromCategory(val)}
            textField=""
            />  
        </Bootstrap.Col>
        <Bootstrap.Col></Bootstrap.Col>
      </Bootstrap.Row>
      <Bootstrap.Row className={"hangmanImage"}>
        <Bootstrap.Col></Bootstrap.Col>
        <Bootstrap.Col>
          <img alt="test" src={"./images/hang0.gif"}/>
        </Bootstrap.Col>
        <Bootstrap.Col></Bootstrap.Col>
      </Bootstrap.Row>
      
    </div>
  );
}

export default App;
