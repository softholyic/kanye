import React from 'react';

import { ReactComponent as Twitter } from '../kanyePics/Twitter_Logo_WhiteOnImage.svg';

export default function Button(props) {
	const { text, icon, children } = props;
	const styles = {
		div: {
			width: '130px',
			height: '40px',
			background: '#928B61',
			borderRadius: '35px',
			position: 'relative',
			fontSize: '20px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		anchor: {
			color: 'black',
			textDecoration: 'none'
		},
		span: {
			position: 'relative',
			top: '5px'
		}
	};
	return (
		<a {...props} style={styles.anchor}>
			<div style={styles.div}>
				{children}
				<span style={styles.span}>
					<Twitter />
				</span>
			</div>
		</a>
	);
}
