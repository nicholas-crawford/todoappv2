import React, {ChangeEvent} from 'react';

interface checkboxProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

const Checkbox = (props: checkboxProps) => {
    const {
        onChange,
        checked,
    } = props

    return (
        <input onChange={onChange} checked={checked} type="checkbox"/>
    )
}
export default Checkbox;