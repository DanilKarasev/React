import './Message.css';

export const Message = (props) => {
    return <div className="greeting-message">{props.text}</div>
}