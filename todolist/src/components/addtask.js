import { useState } from 'react';

const AddTask = ({ addItem }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title) {
            alert('Invalid value');
        }

        addItem({ title, content, reminder});

        setTitle('');
        setContent('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                type='text' 
                placeholder='Add Task' 
                value={title} 
                onChange={ (e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date and Time</label>
                <input 
                type='text' 
                placeholder='Add Date and Time' 
                value={content}
                onChange={ (e) => setContent(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input 
                type='checkbox' 
                checked={reminder}
                value={reminder}
                onChange={ (e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask