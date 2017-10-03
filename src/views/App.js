import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Tracklist from '../modules/Tracklist';
import Download from '../modules/Download';
import Footer from '../modules/Footer';

import logo from '../logo.png';
import './App.css';

class App extends Component {
    get params() {
        return this.props.match.params;
    }

    render() {
        const { showcase, code } = this.params;
        let data;

        try {
            data = require(`../data/${showcase}/${code}.json`);
        } catch (e) {
            return <Redirect to={`/?from=${showcase}-${code}`} />;
        }

        return (
            <div className="t-app">
                <img src={logo} className="t-logo" alt="Beyond Souls Logo" />
                <h1>{data.title}</h1>
                {data.description && <p>{data.description}</p>}
                <Tracklist tracks={data.tracks} showHeader={false} />
                <Download
                    showcase={showcase}
                    code={code}
                    exceededText={data.exceeded.description}
                    url={data.download.url}
                    downloadTitle={data.download.title}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
