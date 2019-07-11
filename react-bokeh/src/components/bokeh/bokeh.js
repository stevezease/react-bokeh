import React from 'react';
import BokehLight from './bokeh-light/bokeh-light';
import './bokeh.css';

const Bokeh = props => {
    return (
        <div className="bokeh">
            {Array.from(Array(50).keys()).map(x => (
                <BokehLight
                    color={Math.random() > 0.5 ? '#ff9900' : '#ff9900'}
                />
            ))}
        </div>
    );
};

export default Bokeh;
