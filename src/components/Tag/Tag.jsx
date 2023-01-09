// Style
import '../Tag/Tag.css';

// React
import React from 'react';

function Tag({name}) {
    return(
        <span className="tag">{name}</span>
    );
}

export default Tag;