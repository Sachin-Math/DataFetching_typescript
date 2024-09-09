import React from 'react';
import spinnerImage from "../assets/img/spinner.gif";

const SpinnerUI: React.FC = () => {
    return (
        <>
            <div className="spinner-div">
                <img src={spinnerImage} alt=""/>
            </div>
        </>
    );
}
export default SpinnerUI;
