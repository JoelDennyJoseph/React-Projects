const Header = ({ changeShowAdd, addValue }) => {
    return(
        <header className='header'>
            <h1>Task List</h1>
            <button className={`btn ${addValue ? 'black-button' : 'blue-button' }`} onClick={changeShowAdd}>
            { addValue ? 'Close' : 'Add'}
            </button>
        </header>
    )
}

export default Header;