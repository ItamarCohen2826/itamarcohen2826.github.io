import React from 'react';
import './style.css';
import Slider from '@mui/material/Slider';
import { solve } from './solve';
let clear = false;

class TowerOfHanoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        const diskDisplay = document.getElementById('disks');
        diskDisplay.innerHTML = this.state.value + ' disks';
      }
    
      handlePress(event) {
        const output = document.getElementById('moves');
        const btn = document.getElementById('solve');
        solve(this.state.value, 'A', 'C', 'B', 'moves');
        clear = !clear;
        if (clear) {
            btn.innerHTML = 'Clear'
        } 
        if (btn.innerHTML === 'Clear' && clear === false) {
            output.innerHTML = ' ';
            btn.innerHTML = 'Solve';    
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
            <div className="container">
                <h1 className="title">Tower Of Hanoi</h1>
                <br />
                <p className="explanation">In this game you must move all the pieces in order to rebuild the tower in the third spot.
                    <br />
                    You <strong>can't</strong> put a bigger piece on a smaller piece.
                    <br />
                    Good luck!
                </p>
                <Slider aria-label="Disks" onChange={this.handleChange} defaultValue={2} min={2} max={10} />
                <button id="solve" className='solve' onClick={this.handlePress}>Solve!</button>
                <p id="disks"></p>
                <div id="moves" className='moves'></div>
            </div>
        </div>
        );
    }
}

export default TowerOfHanoi;
