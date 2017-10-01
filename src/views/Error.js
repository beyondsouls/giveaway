import React from 'react';

const ErrorView = () => {
    return (
        <div className="t-error">
            <h2>Not found</h2>
            <p>
                The selected content was not found on this site, go to the{' '}
                <a href="https://beyond-souls.com">Beyond Souls</a> website.
            </p>
        </div>
    );
};

export default ErrorView;
