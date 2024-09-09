import React from 'react';

interface IProps {
    message: string;
}

const ErrorMessage: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-danger">{props.message}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ErrorMessage;
