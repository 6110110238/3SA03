import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

var temp = 5; 
var word = ""; 
var reload = 0;
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        count: 5,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        console.log(guess)

        setState({...state, guess: guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
                alertWin(props.value)
                window.location.reload(false);
            }else{
                console.log('reset')
                state.count -= 1;
                setState({...state, guess: '' , attempt: state.attempt + 1})
                alertLose()
            }
        }
        temp = state.count;
        if(temp == 0){
            word = props.value;
        }
        if(reload >= 1) {
            reload = 0;
            window.location.reload(true);
        } 
    }

    if(temp == 0){
        reload++;
        return (
            <div>
                    <div id="Result">The word is: {word}    -- Click any letter to play again --</div>
                    {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    ) 
                }
            </div>
        );
    }
    else {
        return (
            <div>
                    <div id="Result">You can try : {temp} round.</div>
                    {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    ) 
                }
            </div>
        );
    }

    function alertWin(word) {
        alert("Congratulations !" + "\nThe word is: " + word);
    }
    function alertLose() {
        alert("Let's try again");
    }
}
