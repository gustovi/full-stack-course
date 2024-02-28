const Notification = ({message, error}) => {
    if (message) {
        return (
            <div className={`message ${error ? 'error-message' : 'notify-message'}`}>
                {message}
            </div>
        )
    }
}

export default Notification