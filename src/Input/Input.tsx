import React, {ChangeEvent} from 'react';

interface inputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholderText: string;
}

const Input = (props: inputProps) => {
    const {
        onChange,
        placeholderText,
    } = props

    return (
        <input onChange={onChange} placeholder={placeholderText} />
    )
}
export default Input;