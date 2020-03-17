import React, { Component } from 'react';
import styles from './CheckInCheckOut.module.css';


class CheckInCheckOut extends Component {

    state = {
        hh: 0,
        mm: 0,
        ss: 0,
        ischeckIn: false
    }

    checkInHandler = () => {
        let newHH = 0, newMM = 0, ss = 0;
        this.setState({ ischeckIn: true});

        setInterval(() => {
            ss++;
            if (this.state.mm > 59) {
                newHH = this.state.hh + 1;
            }
            if (this.state.ss >= 59) {
                newMM = this.state.mm + 1;
                ss = 0
            }
            this.setState({ hh: newHH, mm: newMM, ss: ss });
        }, 1000)
    }

    render() {
        return (
            <div className={styles.CheckInCheckOut}>
                <p>Welcome to Zoho</p>
                <div>{`${this.state.hh}:${this.state.mm}:${this.state.ss}`}</div>
                {!this.state.ischeckIn ?
                    <button className={styles.Button} onClick={this.checkInHandler}>Check In </button>
                    : <button className={styles.Button} >Check Out </button>}
            </div>
        );
    }

}
export default CheckInCheckOut;