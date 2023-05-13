import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Kana = React.lazy(() => import('./views/Kana'));
const Search = React.lazy(() => import('./views/Search'));
const Kanji = React.lazy(() => import('./views/Kanji'));
const KanjiDetail = React.lazy(() => import('./views/KanjiDetail'));
const Game = React.lazy(() => import('./views/Game'));
const DnDGame = React.lazy(() => import('./views/DnDGame'));
const Typerace = React.lazy(() => import('./views/Typerace'));
const FallingWords = React.lazy(() => import('./views/FallingWords'));
const routes = [
    { path: '/', exact: true, name: 'Нүүр', component: Home },
    { path: '/hiragana', exact: true, symbol: 'あ', name: 'Hiragana', component: Kana },
    { path: '/katakana', exact: true, symbol: 'ア', name: 'Katakana', component: Kana },
    { path: '/search/', exact: true, name: 'Хайх', component: Search },
    { path: '/kanji/:id', exact: true, name: 'Kanji Detail', component: KanjiDetail },
    { path: '/kanji', exact: true, name: 'Ханз', component: Kanji },
    { path: '/game', exact: true, name: 'Тоглоом', component: Game },
    { path: '/game/pairing-kana', exact: true, name: 'Үсгүүдийг олоод устга', component: DnDGame },
    { path: '/game/typerace', exact: true, name: 'Бичгийн машин', component: Typerace },
    { path: '/game/fallingWords', exact: true, name: 'Унах үгс', component: FallingWords },
    { path: '/404', name: '404 Олдсонгүй', component: NotFound },
    { path: '*', name: '404 Олдсонгүй', component: NotFound },
]

export default routes;