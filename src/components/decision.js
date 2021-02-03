function Decision(props) {
    console.log(props.decision)
    return (
        <span id="judge" style={{ display: props.isDisplay }}>{props.decision === '' ? "Sorry, youre not choosen yet." : props.decision}</span>
    )
}
export default Decision