import * as React from "react";

interface OwnProps {
    guessedLetters: string[];
    randomWord: string;
}

type Props = OwnProps;

class ClueComponent extends React.PureComponent<Props, any> {
    public constructor(props: any, context: any) {
        super(props, context);
    }

    private isGuessedLetter(letter: string) {
      return this.props.guessedLetters.includes(letter.toUpperCase());
    }

    private renderClueText() {
      let randomWord = this.props.randomWord
      let clueText = ''
      for (let i =0; i< randomWord.length; i++) {
        let answerLetter = randomWord.charAt(i)
        if (this.isGuessedLetter(answerLetter) || answerLetter === ' ') {
          clueText = clueText + answerLetter
        }
        else {
          clueText = clueText + '_'
        }
      }
      return clueText
    }

    render() {
      return (<div> { this.renderClueText() } </div>)
    }
  }

export default ClueComponent;
