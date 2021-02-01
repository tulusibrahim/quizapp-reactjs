function Decision(props) {
    return (
        <span id="judge" style={{ display: props.isDisplay }}>{props.decision}</span>
    )
}
export default Decision