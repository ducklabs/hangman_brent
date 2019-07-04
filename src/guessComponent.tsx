import * as React from "react";
import * as Bootstrap from 'react-bootstrap';

interface OwnProps {
    guessedLetters: string[];
    checkGuess: (guess: string) => void;
}

type Props = OwnProps;

class GuessComponent extends React.PureComponent<Props, any> {
    public constructor(props: any, context: any) {
        super(props, context);
        this.captureGuess = this.captureGuess.bind(this);
    }

    private captureGuess(value: any) {
        this.props.checkGuess(value.currentTarget.value.toUpperCase())
    }

    render() {
      return  (         
      <div>
        <Bootstrap.Row>
            <Bootstrap.Col></Bootstrap.Col>
            <Bootstrap.Col><span>Guessed Letters</span></Bootstrap.Col>
            <Bootstrap.Col></Bootstrap.Col>
        </Bootstrap.Row>
        <Bootstrap.Row>
            <Bootstrap.Col></Bootstrap.Col>
            <Bootstrap.Col>{this.props.guessedLetters.toString()}</Bootstrap.Col>
            <Bootstrap.Col></Bootstrap.Col>
        </Bootstrap.Row>
        <Bootstrap.Row>
            <Bootstrap.Col></Bootstrap.Col>
            <Bootstrap.Col><span>Make a Guess!</span></Bootstrap.Col>
            <Bootstrap.Col></Bootstrap.Col>
        </Bootstrap.Row>
        <Bootstrap.Row>
            <Bootstrap.Col></Bootstrap.Col>
            <Bootstrap.Col>
            <Bootstrap.InputGroup className="mb-1">
                <Bootstrap.FormControl
                placeholder="Letter"
                aria-label="Guess Letter"
                aria-describedby="basic-addon2"
                onBlur={(event: any) => this.captureGuess(event)}
                />
            </Bootstrap.InputGroup>
            </Bootstrap.Col>
            <Bootstrap.Col></Bootstrap.Col>
        </Bootstrap.Row>
        
      </div>)
      
 
    }
  }
export default GuessComponent;