import * as React from "react";
import * as Bootstrap from 'react-bootstrap';

interface OwnProps {
    guessedLetters: string[];
    checkGuess: (guess: string) => void;
}

interface State {
    error: string;
}

type Props = OwnProps;

class GuessComponent extends React.PureComponent<Props, State> {
    public constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            error: ""
        }
        this.captureGuess = this.captureGuess.bind(this);
    }

    private captureGuess(value: any) {
        const isNum = isNaN(value.target.value); //.toUpperCase()
        if (isNum) {
            this.props.checkGuess(value.target.value.toUpperCase());
            this.setState({ error: ""});
        } else {
            this.setState({ error: "Only Letters may be selected"});
        }
        
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
                onChange={(event: any) => this.captureGuess(event)}
                value={""}
                />
            </Bootstrap.InputGroup>
            </Bootstrap.Col>
            <Bootstrap.Col></Bootstrap.Col>
        </Bootstrap.Row>
        <Bootstrap.Row>
            <Bootstrap.Col></Bootstrap.Col>
            <Bootstrap.Col><Bootstrap.Badge variant="warning">{this.state.error}</Bootstrap.Badge></Bootstrap.Col>
            <Bootstrap.Col></Bootstrap.Col>
        </Bootstrap.Row>
        
      </div>)
      
 
    }
  }
export default GuessComponent;