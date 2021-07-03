import { FaTimes } from 'react-icons/fa';

const Task = ({onetask, onToggle, onDelete}) => {
    return (
        <div className={`task ${onetask.reminder? 'reminder' : '' }`}
        onDoubleClick={() => onToggle(onetask.id)}>
            <h3>{onetask.title} <FaTimes onClick={() => onDelete(onetask.id)}/></h3>   
            <p>{onetask.content}</p>
        </div>
    )
}

export default Task;