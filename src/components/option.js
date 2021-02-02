function Option(props) {

    const detAns = (e) => {
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
            {props.cat && "Please choose one of category in More options section."}
            {
                props.judgjing.map(res => {
                    return <button key={res} className="button" onClick={(e) => detAns(e)}>{res}</button>
                })
            }
        </div>
    )
}
export default Option