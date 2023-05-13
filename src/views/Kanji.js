import React, { useState, useEffect } from 'react';
import axios from 'axios';
import H1 from '../components/H1'
import CategoryFilterButton from '../components/CategoryFilterButton'
import KanjiContainer from '../components/KanjiContainer';

const Kanji = () => {
    const [kanjiList, setKanjiList] = useState([]);
    const [filter, setFilter] = useState("grade-1");
    const [modal, setModal] = useState(false);
    const [checkData, setCheckData] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            axios.get('https://kanjiapi.dev/v1/kanji/'+filter)
            .then(response => {
                if (response.data.length === 0) {
                    setCheckData(false);
                }
                setKanjiList(response.data);
                window.scrollTo(0,0)
            })
        }
        fetchData()
    },[filter])
    const changeFilter = (newFilter) => {
        setKanjiList([]);
        setFilter(newFilter)
        setModal(false);
    }
    return(
        <div className="relative text-center lg:mx-36">
            <H1 span={"漢字"} text={"Kanji"}/>
            <div className="flex flex-col pb-4 px-1 ">
                <div className="flex flex-col lg:flex-row pt-4 dark:border-gray-700">
                    {/* Modal */}
                    <div className="relative lg:ml-2 my-auto">
                        {/* Button */}
                        <span className="text-sm pb-3 pl-1 pt-0 text-left capitalize block">{'Шүүлтүүр: "'+filter+'"'}</span>
                        <button onClick={() => {setModal(!modal)}} className="flex bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow hover:bg-gray-100 text-lg px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary ring-offset-4 dark:ring-offset-gray-800">
                            <span className="text-base">Зэрэг</span>
                            <svg className={"transform scale-50 ml-2 my-auto "+(!modal ? "rotate-0" : "-rotate-90")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path stroke="currentColor" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                            </svg>
                        </button>
                        {/* Modal */}
                        <div className={(modal ? "flex" : "hidden")+" absolute left-32 top-8 rounded-lg w-32 bg-white shadow-lg dark:bg-gray-700 flex-col ml-auto px-3 py-3 z-10"}>
                            <div className="flex flex-col space-y-2">
                                <CategoryFilterButton category="Зэрэг-1" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <CategoryFilterButton category="Зэрэг-2" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <CategoryFilterButton category="Зэрэг-3" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <CategoryFilterButton category="Зэрэг-4" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <CategoryFilterButton category="Зэрэг-5" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <CategoryFilterButton category="Зэрэг-6" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <CategoryFilterButton category="Зэрэг-8" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                {/* <RadioInput category="joyo" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/>
                                <RadioInput category="jinmeiyo" checked={filter} onSend={(theFilter) => changeFilter(theFilter)}/> */}
                            </div>
                        </div>
                    </div>
                    {/* Modal End */}
                </div>
            </div>
            <ul className="grid grid-cols-4 lg:grid-cols-6 items-center xl:grid-cols-9 px-3 py-4 lg:p-6 mx-1 gap-2 lg:gap-3 rounded-lg lg:space-y-0 bg-gray-200 dark:bg-gray-900 shadow-inner">
                <KanjiContainer kanjiList={kanjiList} filter={filter} checkData={checkData}/>
            </ul>
        </div>
    )
}

export default Kanji;