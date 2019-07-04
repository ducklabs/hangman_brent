import React from 'react';
import './App.css';
import * as Bootstrap from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
import HangmanImage from './hangmanImageComponent';
import ClueComponent from './clueComponent';
import categoriesJson from './words.json';

let categories: Record<string, Array<string>>  = categoriesJson

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
        return Object.keys(categories);
      }

      private displayWordFromCategory(category: string): string {
        let possibleWords = categories[category];
        let chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        console.log('Random word:', chosenWord);
        return chosenWord;
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
                <Bootstrap.Col md={4}></Bootstrap.Col>
                <Bootstrap.Col>
                    <HangmanImage wrongCount={this.state.wrongCount}/>
                </Bootstrap.Col>
                <Bootstrap.Col></Bootstrap.Col>
            </Bootstrap.Row>
            <Bootstrap.Row className={"clueComponent"}>
                <Bootstrap.Col md={4}></Bootstrap.Col>
                <Bootstrap.Col>
                    <ClueComponent randomWord={'Hello there'} guessedLetters={['H','E', 'O']}/>
                </Bootstrap.Col>
                <Bootstrap.Col></Bootstrap.Col>
            </Bootstrap.Row>
      </div>
      )
    }
  }
export default MainComponent;
