// Greeter.js
import React ,{Component} from 'react'
var config = require('../config.json')
import styles from './Greeter.css'
class Greeter extends Component{
    render(){
        return (
            <div style={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter