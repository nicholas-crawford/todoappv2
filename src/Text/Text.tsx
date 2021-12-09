import React from 'react';

interface textProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Text = (props: textProps) => {
    const {
        children,
        onClick,
    } = props;

    return (
        <p onClick={onClick}>{children}</p>
        )

}

export default Text