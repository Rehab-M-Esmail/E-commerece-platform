import { useState } from "react";
import PropTypes from 'prop-types';
import "./FormInput.css"


const FormInput = (props) => {
    const { label, icon,pattern, errorMessage, onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className="FormInput">
            <label>{label}</label>
            <div className="inputWithIcon">
                {icon && (
                    <img
                        src={icon}
                        alt={`${inputProps.name} icon`}
                        className="inputIcon"
                    />
                )}
                <input
                    {...inputProps}
                    id={inputProps.name}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() =>
                        inputProps.name === "confirmpassword" && setFocused(true)
                    }
                    data-focused={focused.toString()}
                    aria-invalid={focused && errorMessage ? "true" : "false"}
                    pattern={pattern}
                />
            </div>
            <span className="errorMessage">{focused && errorMessage}</span>
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string, 
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.string,
};

export default FormInput;