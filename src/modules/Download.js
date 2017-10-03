import React, { Component } from 'react';
import Store from 'store';
import './Download.css';

class Download extends Component {
    get storeId() {
        const { showcase, code } = this.props;
        return `BYND__${showcase}__${code}`;
    }

    get exceeded() {
        return !!Store.get(this.storeId);
    }

    set exceeded(val) {
        Store.set(this.storeId, val);
    }

    render() {
        const { url, exceededText, downloadTitle } = this.props;
        console.log(this.exceeded);

        return (
            <div className="m-download">
                {this.exceeded && <p className="a-exceeded">{exceededText}</p>}
                {!this.exceeded && (
                    <p className="a-download__note">
                        Der Download ist pro Person auf 1x beschränkt und nur 24h nach Eventstart
                        Verfügbar.
                    </p>
                )}
                <br />
                {!this.exceeded && (
                    <div className="a-download-wrapper">
                        <a href={url} className="a-download" onClick={() => (this.exceeded = true)}>
                            {downloadTitle}
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default Download;
