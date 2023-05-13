import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

const DropBox = (props) =>{
    const [kana, setKana] = useState();
    const [show, setShow] = useState(true);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    useEffect(() => {
        if (props.category === "Hiragana") {
            setKana(props.kana.hiragana) 
        } else if (props.category === "Katakana") {
            setKana(props.kana.katakana)
        } else if (props.category === "Romaji") {
            setKana(props.kana.romaji)
        }
    }, [kana, props])
    const onDragStart = (e) => {
        props.onSetDragItem(props.kana)
        if (!isTabletOrMobile) {
            setTimeout(() => {
                setShow(false)
                e.dataTransfer.setData(props.kana, e.target.id);
            }, 10);
        }
    }
    const onDragEnd = (e) => {
        setShow(true)
    }
    return(
        <li 
            draggable
            autoscroll="true"
            onClick={() => props.onSetDragItem(props.kana)}
            onDragStart={(e) => onDragStart(e)}
            onDragEnd={(e) => onDragEnd(e)} 
            className="box-border flex text-center text-2xl lg:text-4xl font-bold w-12 lg:w-16 h-12 lg:h-16 hover:text-red-300 cursor-pointer">
            <span id={props.kana}
                className={(props.dragItem === props.kana ? "text-primary" : "")+" border-b-2 border-current m-auto "} >
                {!props.correct ? (show ? kana : "") :""}
            </span>
        </li>

    )
}

export default DropBox;