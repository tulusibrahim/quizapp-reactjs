import { useEffect, useState } from "react";

const Showcategory = (props) => {
    const [category, setCategory] = useState(0)
    console.log(category)

    const handleChange = (e) => {
        setCategory(e.target.value)
        props.categ(e.target.value)
    }

    console.log(props.drop)
    let styles = {
        display: props.isDisplay,
        opacity: props.opac,
        transition: '.5s'
    }

    useEffect(() => {
        setCategory(0)
    }, [])

    return (


        <div className="showcat" style={{ height: props.high }}>
            <p style={styles}>Choose category</p>
            <form>
                <select style={styles} onChange={(e) => handleChange(e)} value={category} disabled={props.drop ? true : false}>
                    <option disabled>Choose one</option>
                    <option value={26}>Celebrity</option>
                    <option value={21}>Sports</option>
                    <option value={9}>General Knowledge</option>
                    <option value={27}>Animal</option>
                    <option value={18}>Computer Science</option>
                    <option value={11}>Film</option>
                </select>
            </form>
        </div>
    );
}
export default Showcategory