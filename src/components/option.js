function Option(props) {

    const detAns = (e) => {
        let btn = document.querySelectorAll(".button")
        for (let i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        if (props.ans === e.target.textContent) {
            props.setjudge("Youre right.")
            props.btncolor('#136149')
        }
        else {
            props.setjudge("Youre wrong.")
            props.btncolor('#EE6055')
        }
    }

    return (
        <div id="option">
            {props.cat && "Please choose one of category in More options section."}
            {
                props.judgjing.map(res => {
                    return <button key={res} className="button" onClick={(e) => detAns(e)} disabled={props.btndis ? true : false}>{res}</button>
                })
            }
        </div>
    )
}
export default Option