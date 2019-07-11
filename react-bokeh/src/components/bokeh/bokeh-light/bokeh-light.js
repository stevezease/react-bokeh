import React from 'react';
import './bokeh-light.css';
import ParseColor from 'parse-color';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateLighterColor(color, opacity) {
    const hsl = ParseColor(color).hsla;
    return `hsla(${hsl[0]}, ${hsl[1] * 1.2}%, ${randomIntFromInterval(
        hsl[2],
        Math.max(hsl[2], hsl[2] + 15)
    )}%, ${opacity})`;
}

function generateDarkerColor(color, opacity) {
    const hsl = ParseColor(color).hsla;
    return `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, ${randomIntFromInterval(
        opacity * 75,
        opacity * 100
    ) / 100})`;
}

const generateInnerColor = (outercolor, opacity) => {
    const random = Math.random() - 0.5;
    return random > 0
        ? generateLighterColor(outercolor, opacity)
        : generateDarkerColor(outercolor, opacity);
};

const generateOuterColor = (outercolor, opacity) => {
    const hsl = ParseColor(outercolor).hsla;
    return `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, ${opacity})`;
};

const BokehLight = props => {
    const { color } = props;
    const opacity = randomIntFromInterval(45, 100) / 100;
    const innerColor = generateInnerColor(color, opacity);
    const outerColor = generateOuterColor(color, opacity);
    const size = `${randomIntFromInterval(100, 150)}px`;

    const style = {
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${innerColor}, ${innerColor}, ${innerColor}, ${innerColor}, ${innerColor}, ${outerColor})`,
        animationDuration: `${randomIntFromInterval(
            6,
            12
        )}s, ${randomIntFromInterval(6, 12)}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate-reverse',
        top: `calc(${randomIntFromInterval(0, 100)}%`,
        left: `${randomIntFromInterval(0, 100)}%`
    };
    return (
        <div className="bokeh-light" style={style}>
            {' '}
        </div>
    );
};

export default BokehLight;
