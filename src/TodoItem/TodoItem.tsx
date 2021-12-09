import React, {ChangeEvent} from 'react';

import './TodoItem.css'

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text'


interface todoItemProps {
   isDone: boolean;
   todoText: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onClick: () => void;
}

const TodoItem = (props: todoItemProps) => {
    const {
        todoText,
        isDone,
        onChange,
        onClick,
    } = props


    return (
        <div className={isDone ? "TodoItem TodoItem--done" : "TodoItem"}>
            <Checkbox checked={isDone} onChange={onChange}/>
            <Text>{todoText}</Text>
            <Button onClick={onClick}>X</Button>
        </div>
    )
}

export default TodoItem