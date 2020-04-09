import {useState} from "react"


export default initialVal => {
    const [value,setValue] = useState(initialVal)
    const resetValue = () => (setValue(initialVal))
    const changeValue = (e) => (setValue(e.target.value))

    return [value,changeValue,resetValue]
}