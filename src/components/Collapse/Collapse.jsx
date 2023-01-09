// Hooks
import React, { useState, useRef } from 'react';

// Style
import '../Collapse/Collapse.css';

// Images
import chevron from '../../assets/images/ARROW-DOWN.svg';

const Collapse =(props)=>{
    const [open, setOPen] = useState(false);
    const contentRef = useRef();
    if (contentRef.current);
    const toggle = () => {
        setOPen(!open);
    };
    return(
        <div className='collapse-content'>
            <div className='toggle' onClick={toggle}>
                <span className='collapse-title'>{props.label}</span>
                <img
					className={open ? "chevron rotated" : "chevron"}
					src={chevron}
					alt="chevron"
				/>
            </div>
            <div 
                className="collapse-parent"
                ref={contentRef} 
                style={{height: open ? contentRef.current.scrollHeight + "px" : "0px",
                }}>
                <p className='collapse-text'>{props.children}</p>
            </div>
        </div>
    )
}
export default Collapse;