import './Contact.css';
import React from 'react';
import contact from '../../charles-deluvio-AT5vuPoi8vc-unsplash.jpg';

function Contact(props) {
	return (
		<div className='ContactMain'>
			<img src={contact} alt='Neon sign of hands shaking' />
			<div className='ContactMainText'>
				<h2>Questions? Suggestions? We're Happy to Hear From You!</h2>
				<div>Address: P.O. Box 12345678 Anywhere USA, 00056</div>
				<div>Tel: (123)456-7890</div>
				<div>Customer Service Hours: M-F 6am - 5pm PST</div>
				<div>Email: React.Store@yaasmail.co</div>
				<div>Please Allow 1-2 Business Days for Reply By Email</div>
			</div>
		</div>
	);
}

export default Contact;
