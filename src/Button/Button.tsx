import React from 'react';

interface buttonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button = (props: buttonProps) => {
    const {
        onClick,
        children,
    } = props

    return (
        <button onClick={onClick}>{children}</button>
    )
}
export default Button;