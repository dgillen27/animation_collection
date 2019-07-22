import React from 'react';
import './SquareStyles.css'

export default function SquareLoad() {
    return (
        <div className="component"> 
            <div className="square-container">
                <div className="square left"></div>
                <div className="square center"></div>
                <div className="square right"></div>  
            </div>
        </div>
    )
}