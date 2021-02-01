function Answer(props) {
    return (
        <h4 id="jawaban" style={{ display: props.isDisplay }}>
            {props.timerr === 0 ? "The answer is " + props.res + "!" : "The answer revealed in " + props.timerr}
            <span id="timer"></span>
        </h4>
    )
}
export default Answer