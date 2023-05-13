import React from 'react'
import FallbackLoading from './FallbackLoading';
const KanjiBox = React.lazy(() => import('./KanjiBox'));

const KanjiContainer = (props) =>{
    if (props.kanjiList.length === 0) {
        if (props.checkData) {
            return <FallbackLoading height="96" span="Ханзыг ачаалж байна"/>
        } else {
            return <FallbackLoading height="96" text="Ханз олдсонгүй" span={"Filter: "+props.filter}/>
        }
    }
    return(
        <>
            {
                props.kanjiList.map((kana, index) =>{
                    return (
                        <KanjiBox key={index} data={kana}/>
                    )
                })
            }
        </>
    )
}

export default KanjiContainer;