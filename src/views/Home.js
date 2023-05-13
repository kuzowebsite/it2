import React, {useEffect} from 'react';
import illus from '../assets/illus.svg';
import searchIllus from '../assets/searchIllus.svg';
import {Fade} from 'react-reveal';
import { Link } from 'react-router-dom';
import ButtonInstalPWA from "../components/ButtonInstalPWA";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div className="mx-1 lg:mx-32 lg:mr-52">
            <Fade bottom>
                <section className="flex flex-col lg:flex-row lg:mt-12 p-2 lg:p-8 rounded-lg">
                        <div className="flex mx-auto mb-6 lg:mb-0 lg:order-last w-11/12 lg:w-2/5">
                            <img className="mx-auto" src={illus} alt="illustration" width="400"/>
                        </div>
                        <div className="flex flex-col content-start text-center lg:text-left w-11/12 lg:w-3/5 mx-auto">
                            <h1 className="font-black font-head text-3xl lg:text-4xl xl:text-7xl leading-relaxed xl:leading-snug  uppercase">こんにちは <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-red-800 dark:to-red-300">楽しい日本へようこそ</span> 頑張ってね</h1>
                            <p className="text-base lg:text-2xl mt-4 mb-6 lg:mt-8 dark:text-gray-200 w-10/12 lg:leading-normal mx-auto lg:mx-0">楽しい日本は、みんなの日本語学習をサポートする辞書とゲームを提供するウェブサイトです。</p>
                            <ButtonInstalPWA/>
                        </div>
                </section>
            </Fade>
            <Fade bottom>
                <section className="flex flex-col m-8">
                    <h1 className="animate-bounce block text-4xl text-center font-black font-head uppercase my-4">サイトが作られた経緯?</h1>
                    <hr className="h-1 w-48 bg-primary border-none mx-auto mb-9 lg:mb-12 " />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="mx-auto order-last lg:order-first">
                            <img src={searchIllus} alt="" width="300"/>
                        </div>
                        <div className="mx-auto text-lg my-auto space-y-4">
                            <p>サイトについて</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>2023 年にアイダー大学のソフトウェア エンジニアリングの 2 年生が、 <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to='/search?words="food"'>,</Link></li>
                                <li>学んだことと彼自身の研究に基づいてこの Web サイトを作成しました。 <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=ai">,</Link></li>
                                <li>このサイトは Polyshop と呼ばれ、 <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=あお">,</Link></li>
                                <li>すべてのクラスが学んだ内容に基づいて、 <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=犬">,</Link></li>
                                <li>レッスンの最後に知識とスキルのコンテストが行​​われます。 <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=%23jlpt-n3 %23adjective">,</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Home;