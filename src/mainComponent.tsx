import React from 'react';
import './App.css';
import * as Bootstrap from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
import { categories } from './hangmanconstants';
import HangmanImage from './hangmanImageComponent';


interface OwnProps {
}

interface State {
    wrongCount: number;
    randomWord: string;
}

type Props = OwnProps;

class MainComponent extends React.PureComponent<Props, State> {
    public constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            wrongCount: 0,
            randomWord: "Brent"
        }
        this.getCategories = this.getCategories.bind(this);
        this.displayWordFromCategory = this.displayWordFromCategory.bind(this);
        this.increaseNumber = this.increaseNumber.bind(this);
        this.checkGuess = this.checkGuess.bind(this);
    }

    private checkGuess(letter: string) {
        if (this.state.randomWord.indexOf(letter) > -1)
        {
            alert("hello found inside your_string");
        }
    }

    private getCategories(): string[] {
        return Object.keys(categories)
          .filter(k => typeof categories[k as any] === "number") as string[];
      }
      
      private displayWordFromCategory(val: string) {
        console.log(val);
        return "im the word";
      }

      private increaseNumber(){
          
          let newValue = this.state.wrongCount < 10 ? this.state.wrongCount + 1 : 10;
            this.setState({ wrongCount: newValue})
      }

    render() {
        return (
        <div>
            <Bootstrap.Row>
                <Bootstrap.Col>
                    <Bootstrap.Button  onClick={this.increaseNumber}>increase Test</Bootstrap.Button>
                </Bootstrap.Col>
            </Bootstrap.Row>
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
                            data={this.getCategories()}
                            onChange={(val) => this.displayWordFromCategory(val)}
                            textField=""
                            />  
                    </Bootstrap.Col>
                    <Bootstrap.Col></Bootstrap.Col>
                </Bootstrap.Row>
            <Bootstrap.Row className={"hangmanImage"}>
                <Bootstrap.Col md={5}></Bootstrap.Col>
                <Bootstrap.Col>
                    <HangmanImage wrongCount={this.state.wrongCount}/>
                </Bootstrap.Col>
                <Bootstrap.Col></Bootstrap.Col>
            </Bootstrap.Row>
      </div>
      )
    }
  }
export default MainComponent;