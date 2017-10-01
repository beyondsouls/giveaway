import React from 'react';
import './Tracklist.css';

const TracklistItem = ({ catalog, artist, title, version, length }) => {
    return (
        <tr
            data-catalog={catalog}
            title={`${artist} - ${title}${version ? ` (${version} Mix)` : ''}`}
            className="a-tracklist-item"
        >
            {/*<td className="a-tracklist-item__catalog">{catalog}</td>*/}
            <td className="a-tracklist-item__artist">{artist}</td>
            <td className="a-tracklist-item__title">
                {title}
                {version ? (
                    <span className="a-tracklist-item__mix-version"> ({version} Mix)</span>
                ) : (
                    ''
                )}
            </td>
            <td className="a-tracklist-item__duration">{length}</td>
        </tr>
    );
};

const Tracklist = ({ tracks, title, showHeader = true }) => {
    return (
        <table className="m-tracklist">
            {showHeader && (
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Artist</td>
                        <td>Track</td>
                        <td>Duration</td>
                    </tr>
                </thead>
            )}
            <tbody className="m-tracklist__content">
                {tracks.map((track, index) => {
                    return <TracklistItem key={index} {...track} />;
                })}
            </tbody>
        </table>
    );
};

export default Tracklist;
