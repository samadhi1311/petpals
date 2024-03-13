import { Widget, addResponseMessage } from '@ryaneewx/react-chat-widget';
import './styles.css';
import Logo from '../../assets/LogoOutline.svg';

function Chat() {
	const handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		// Now send the message throught the backend API
		addResponseMessage(response);
	};

	return (
		<Widget handleNewUserMessage={handleNewUserMessage} profileAvatar={Logo} title='Welcome to PetPals' subtitle='Your messages will appear here' showCloseButton={true} fullScreenMode={false} />
	);
}

export default Chat;
