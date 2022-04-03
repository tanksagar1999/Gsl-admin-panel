// HomeComponent.jsx
import React from 'react';
import shortid from 'shortid';

function HomeComponent({
    count,
    onIncrementClick,
    onDecrementClick,
    subredditData,
    showSpinner,
    fetchSubreddits
}) {
    let content;
    if (showSpinner) { content = <p>Loading...</p> }
    else {
        content = <ul>
            {subredditData.map((data, index) => (
                <li key={shortid.generate()}>
                    <a href={`https://reddit.com${data.url}`} target="_blank" rel="noopener noreferrer">{data.title}</a>
                </li>
            ))}
            <button onClick={() => fetchSubreddits('reactjs')}>Show ReactJS subreddits</button>
        </ul>
    }
    return (
        <div>
            <p>current count: {count}</p>
            <button onClick={onIncrementClick}>Increment</button>
            <button onClick={onDecrementClick}>Decrement</button>
            {content}
        </div>
    )
}

export default HomeComponent;