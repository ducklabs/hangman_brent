import React from 'react';
import './App.css';
import * as Bootstrap from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
import HangmanImage from './hangmanImageComponent';
import ClueComponent from './clueComponent';
import GuessComponent from "./guessComponent";
import categoriesJson from './words.json';

let categories: Record<string, Array<string>>  = categoriesJson

interface OwnProps {
}

interface State {
    wrongCount: number;
    randomWord: string;
    guessedLetters: string[];
}

type Props = OwnProps;

class MainComponent extends React.PureComponent<Props, State> {
    public constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            wrongCount: 0,
            randomWord: "",
            guessedLetters: []
        }
        this.getCategories = this.getCategories.bind(this);
        this.randomWordFromCategory = this.randomWordFromCategory.bind(this);
        this.increaseNumber = this.increaseNumber.bind(this);
        this.checkGuess = this.checkGuess.bind(this);
    }

    private checkGuess(letter: string) {
        if (!this.state.randomWord.toUpperCase().includes(letter.toUpperCase())) {
            this.increaseNumber();
        }
        this.setState({ guessedLetters: [...this.state.guessedLetters, letter]})
    }

    private getCategories(): string[] {
      return Object.keys(categories);
    }

    private randomWordFromCategory(category: string) {
      let possibleWords = categories[category];
      let chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
      this.setState({randomWord: chosenWord});
      this.setState({ guessedLetters: []});
      this.setState({ wrongCount: 0});
    }

    private increaseNumber(){
      let newValue = this.state.wrongCount < 10 ? this.state.wrongCount + 1 : 10;
        this.setState({ wrongCount: newValue})
    }

    render() {
        return (
        <div>
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
                            onChange={(val) => this.randomWordFromCategory(val)}
                            textField=""
                            />
                    </Bootstrap.Col>
                    <Bootstrap.Col>{this.state.randomWord.length > 0 && (
                    <GuessComponent guessedLetters={this.state.guessedLetters} checkGuess={this.checkGuess}/>
                    )}
                    </Bootstrap.Col>
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
                    <ClueComponent randomWord={this.state.randomWord} guessedLetters={this.state.guessedLetters}/>
                </Bootstrap.Col>
                <Bootstrap.Col></Bootstrap.Col>
            </Bootstrap.Row>
      </div>
      )
    }
  }
export default MainComponent;
