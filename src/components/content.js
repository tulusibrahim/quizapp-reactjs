import { useEffect, useState } from "react"
import Answer from './answer'
import Decision from "./decision";
import LoadingAnim from './loadinganim'
import Option from './option'
import Category from './category'

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
    let [category, setCategory] = useState(0)
    let [error, setError] = useState(false)
    let [choosecat, setChoosecat] = useState(false)
    let [btntext, setBtnText] = useState("Next Question")

    let GetData = (data) => {
        console.log(data)
        setCategory(data)
        if (category === 0 || undefined) {
            setChoosecat(true)
            setBtnDisplay('none')
        }
        else {
            setChoosecat(false)
            setBtnDisplay('block')
        }
    }
    useEffect(() => {
        setBtnText('Start Quiz!')
    }, [])



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

    //celebrity = 26
    //sports = 21
    //general knowledge = 9
    //animal = 27
    //science computer = 18
    //film = 11

    let req = () => {
        setLoading(true)
        setError(false)
        setBtnText('Next question')
        setQuestion('')
        setAnswer('')
        setTimer(timer = 7)
        setChoices([])
        setDisplay('none')
        setBtnDisplay('none')
        setdisplayTimer('none')
        fetch(`https://opentdb.com/api.php?amount=1&category=${category}&type=boolean`)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setdisplayTimer('block')
                setLoading(false)
                reduce()
                setAnswer(data.results[0].correct_answer)
                setQuestion((data.results[0].question).replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'").replace(/&quot;/g, '"').replace(/&#039;s/g, "'s").replace(/&#34;/g, '"').replace(/&#039;t/, "'t").replace(/&#039;/, "'"))
                setChoices(['True', 'False'])
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
                setBtnDisplay('block')
                setBtnText("Try again")
            })
    }

    return (
        <div id="content">
            <LoadingAnim isLoading={loading} res={question} err={error} />
            <Option judgjing={choices} ans={answer} setjudge={setJudge} cat={choosecat} />
            <Answer res={answer} timerr={timer} isDisplay={displayTimer} />
            <Decision isDisplay={display} decision={judge} />
            <button id="next" onClick={req} style={{ display: btnDisplay }}>{btntext}</button>
            <div id="currentscore" style={{ display: `display` }}></div>
            <Category categ={GetData} />
        </div>
    )
}

export default Content