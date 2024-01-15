import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../../../firebase.config";
import './Chat.css'

export default function Chat({ recipientId }) {

    const user = auth.currentUser;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [chatRoomId, setChatRoomId] = useState('');

    useEffect(() => {
        // Generate unique chat room ID
        setChatRoomId(`${recipientId}_${listItemId}`);

        // Fetch messages from the correct chat room
        const chatCollection = collection(db, 'chats', chatRoomId);
        const unsubscribe = chatCollection.onSnapshot((snapshot) => {
            setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });

        return () => unsubscribe();
    }, [recipientId, listItemId, chatRoomId]);

    const handleSendMessage = async () => {
        const newMessageDoc = {
            senderId: auth.currentUser.uid, // Get current user ID
            content: newMessage,
            timestamp: new Date().toISOString(),
        };
        await addDoc(chatCollection, newMessageDoc);
        setNewMessage('');
    };

    return (
        <>
            {
                user ?
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
                                {
                                    messages.map((message) => (
                                        <div key={message.timestamp}>{message.text}</div>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="chat-input">
                            <input type="text" className="message-input" placeholder="Type your message here" value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)} />
                            <button className="send-button" onClick={handleSendMessage}>Send</button>
                        </div>
                    </div> : null
            }
        </>
    )
}