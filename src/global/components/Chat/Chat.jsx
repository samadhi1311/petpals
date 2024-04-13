import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage } from '@ryaneewx/react-chat-widget';
import { auth, db } from '../../../../firebase.config';
import { collection, addDoc, doc, updateDoc, serverTimestamp, getDoc, setDoc, orderBy, onSnapshot, query } from 'firebase/firestore';
import Logo from '../../assets/LogoOutline.svg';
import './styles.css';

function Chat({ postId, authorId, currentUser }) {
	const [messages, setMessages] = useState([]);

	const getCustomLauncher = (handleToggle) => <button onClick={handleToggle}>This is my launcher component!</button>;

	useEffect(() => {
		// Retrieve previous messages from Firestore when component mounts
		const unsubscribe = onSnapshot(query(collection(db, 'chats', postId, currentUser.uid), orderBy('timestamp')), (snapshot) => {
			const newMessages = snapshot.docs.map((doc) => doc.data());
			setMessages(newMessages);
		});

		// Cleanup function
		return () => unsubscribe();
	}, [postId, currentUser.uid]);

	const handleNewUserMessage = async (newMessage) => {
		try {
			const chatRef = doc(db, 'chats', postId); // Reference to the chat document under postId
			const messagesRef = collection(chatRef, currentUser.uid); // Reference to the messages subcollection

			const newMessageRef = doc(messagesRef); // Create a new message document

			const messageData = {
				text: newMessage,
				senderId: currentUser.uid,
				timestamp: serverTimestamp(),
			};

			await setDoc(newMessageRef, messageData); // Add the message to the subcollection

			// Update local state using useEffect after the asynchronous operation
			useEffect(() => {
				setMessages([...messages, messageData]); // Add the new message to local state
			}, [messageData]); // Dependency on messageData
		} catch (error) {
			console.error('Error adding message:', error);
		}
	};

	// Function to send initial messages to the chat widget
	const sendMessagesToChatWidget = () => {
		messages.forEach((message) => addResponseMessage(message));
	};

	// Send initial messages to the chat widget when component mounts
	sendMessagesToChatWidget();

	return (
		<Widget
			handleNewUserMessage={handleNewUserMessage}
			profileAvatar={Logo}
			title={`Chat with ${currentUser.uid}`}
			subtitle='Start chatting!'
			showCloseButton={true}
			fullScreenMode={false}
			launcher={(handleToggle) => getCustomLauncher(handleToggle)}
		/>
	);
}

export default Chat;
