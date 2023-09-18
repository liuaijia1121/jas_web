import React from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';
import Footer from './components/Footer';
import CV from './CV';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import VideoPlayer from './VideoPlayer';

function App() {
    return (
        <Router>
            <div id="intro">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/video" element={<VideoPlayer />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
function HomePage() {
    return (
        <div className="intro-center">
            <div className="intro-center-box">
                <div className="intro-center-top"></div>
                <div className="intro-center-main">
                    <Song
                        imgSrc={process.env.PUBLIC_URL + "/img/反方向的钟.png"}
                        singer="周杰伦"
                        songName="反方向的钟"
                    />
                    <Song
                        imgSrc={process.env.PUBLIC_URL + "/img/学不会.png"}
                        singer="林俊杰"
                        songName="学不会"
                    />
                    <Song
                        imgSrc={process.env.PUBLIC_URL + "/img/说谎.png"}
                        singer="林宥嘉"
                        songName="说谎"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
