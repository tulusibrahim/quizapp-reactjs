import { useEffect, useState } from 'react';
import Showcategory from './showcategory'

const Category = (props) => {
    const [height, setHeight] = useState('')
    const [className, setClassName] = useState('fas fa-chevron-up')
    const [text, setText] = useState('More options')
    const [display, setDisplay] = useState('none')
    const [opacity, setOpacity] = useState(0)

    const toParent = (data) => {
        console.log(data)
        props.categ(data)
    }

    useEffect(() => {
        toParent()
        // eslint-disable-next-line
    }, [])

    let showcat = () => {
        if (height === '') {
            setHeight("120px")
            setClassName('fas fa-chevron-down')
            setText("Less options")
            setDisplay('flex')
            setOpacity(1)
        }
        else {
            setHeight('')
            setClassName('fas fa-chevron-up')
            setText("More options")
            setDisplay('none')
            setOpacity(0)
            toParent()
        }

    }

    return (
        <div className="category">
            <p onClick={showcat}>{text} <i className={className}></i></p>
            <Showcategory high={height} isDisplay={display} opac={opacity} categ={toParent} />
        </div>
    );
}


export default Category;