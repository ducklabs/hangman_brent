import * as React from "react";

interface OwnProps {
    wrongCount: number;
}

type Props = OwnProps;

class HangmanImage extends React.PureComponent<Props, any> {
    public constructor(props: any, context: any) {
        super(props, context);

        this.getCorrectImage = this.getCorrectImage.bind(this);
    }

    private getCorrectImage(index: number) {
        console.log(this.props.wrongCount);

        return "./images/hang" + index.toString() + ".gif";
    }

    render() {
        const test = this.getCorrectImage(this.props.wrongCount);
      return <img style={{height: "150px", width: "150px"}} alt="test" src={test}/>;
    }
  }
export default HangmanImage;