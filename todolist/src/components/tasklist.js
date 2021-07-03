import Task from './task';

const Tasklist = ({allTasks, onToggle, onDelete}) => {
    return (
        <div>
            { allTasks.map((t, i) => (
                <Task 
                key={i} 
                onetask={t} 
                onToggle={onToggle}
                onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Tasklist;