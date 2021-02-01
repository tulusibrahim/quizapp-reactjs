import { useState } from "react"

function Content() {
    let [loading, setLoading] = useState(false)
    let [question, setQuestion] = useState('')
    let [choices, setChoices] = useState([])
    let [btnDisplay, setBtnDisplay] = useState('')
    let [answer, setAnswer] = useState('')
    let [display, setDisplay] = useState('none')
    let [displayTimer, setdisplayTimer] = useState('none')
    // let [rightAnswer, setRightAnswer] = useState('')
    let [judge, setJudge] = useState('')
    // let [score, setScore] = useState(0)
    // let [currentScore, setCurrentScore] = useState(0)
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
    //fas fa-spinner fa-pulse fa-spinner
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

function LoadingAnim(props) {
    return (
        <h2 id="ask" style={{ textAlign: 'center' }}>{props.isLoading && 'Loading...'}{props.res}</h2>
    )
}

function Decision(props) {
    return (
        <span id="judge" style={{ display: props.isDisplay }}>{props.decision}</span>
    )
}

function Answer(props) {
    return (
        <h4 id="jawaban" style={{ display: props.isDisplay }}>
            {props.timerr === 0 ? "The answer is " + props.res + "!" : "The answer revealed in " + props.timerr}
            <span id="timer"></span>
        </h4>
    )
}

function Option(props) {

    const detAns = (e) => {
        // e.target.disabled = true
        let btn = document.querySelectorAll(".button")
        for (let i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        if (props.ans === e.target.textContent) {
            props.setjudge("Youre right.")
        }
        else {
            props.setjudge("Youre wrong.")
        }
    }

    return (
        <div id="option">
            {
                props.judgjing.map(res => {
                    return <button key={res} className="button" onClick={(e) => detAns(e)}>{res}</button>
                })
            }
        </div>
    )
}


export default Content