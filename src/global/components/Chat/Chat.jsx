import './Chat.css'

export default function Chat() {
    return (
        <>
            <div className="card">
                <div className="chat-header">
                    <h3>Chat</h3>
                </div>
                <div className="chat-window">
                    <ul className="message-list">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>I</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>I</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                    </ul>
                </div>
                <div className="chat-input">
                    <input type="text" className="message-input" placeholder="Type your message here" />
                    <button className="send-button">Send</button>
                </div>
            </div>
        </>
    )
}

