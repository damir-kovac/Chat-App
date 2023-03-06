import React from "react";

const InputField = ({sendMessage}) => {

    const formSubmit = (e) => {
        e.preventDefault();
        sendMessage(e.target[0].value);
        e.target[0].value = "";
    };

    return (
        <div id="inputField" className="boxStyling">
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    placeholder="Type your messege here"
                    autoFocus={true}
                />
                <button>Send</button>
            </form>
        </div>
    );
};

export default InputField;
