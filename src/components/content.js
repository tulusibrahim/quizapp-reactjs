import { useState } from "react"
import Answer from './answer'
import Decision from "./decision";
import LoadingAnim from './loadinganim'
import Option from './option'

function Content() {
    let [loading, setLoading] = useState(false)
    let [question, setQuestion] = useState('')
    let [choices, setChoices] = useState([])
    let [btnDisplay, setBtnDisplay] = useState('')
    let [answer, setAnswer] = useState('')
    let [display, setDisplay] = useState('none')
    let [displayTimer, setdisplayTimer] = useState('none')
    let [judge, setJudge] = useState('')
    let [timer, setTimer] = useState(7)


    let reduce = () => {
        let interval = setInterval(() => {
            setTimer(timer--)
            if (timer < 0) {
                clearInterval(interval)
                setDisplay('block')
                setBtnDisplay('block')
            }
        }, 1000);
    }

    let req = () => {
        setLoading(true)
        console.log(loading)
        setQuestion('')
        setAnswer('')
        setTimer(timer = 7)
        setChoices([])
        setDisplay('none')
        setBtnDisplay('none')
        setdisplayTimer('none')
        fetch('https://opentdb.com/api.php?amount=1&category=9&type=boolean')
            .then((res) => res.json())
            .then(data => {
                setdisplayTimer('block')
                setLoading('')
                reduce()
                setAnswer(data.results[0].correct_answer)
                setQuestion((data.results[0].question).replace(/&quot;/g, '"').replace(/&#039;s/g, "'s").replace(/&#34;/g, '"').replace(/&#039;t/, "'t").replace(/&#039;/, "'"))
                setChoices(['True', 'False'])
            })
    }
    console.log(loading)

    return (
        <div id="content">
            <LoadingAnim isLoading={loading} res={question} />
            <Option judgjing={choices} ans={answer} setjudge={setJudge} />
            <Answer res={answer} timerr={timer} isDisplay={displayTimer} />
            <Decision isDisplay={display} decision={judge} />
            <button id="next" onClick={req} style={{ display: btnDisplay }}>Next Question</button>
            <div id="currentscore" style={{ display: `display` }}></div>
        </div>
    )
}

export default Content