function LoadingAnim(props) {
    return (
        <h2 id="ask" style={{ textAlign: 'center' }}>{props.isLoading && 'Loading...'}{props.res}</h2>
    )
}
export default LoadingAnim