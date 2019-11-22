import React from 'react';
import './index.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastiv. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        )
    }
}

export default Hello;