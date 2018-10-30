import * as React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.StatelessComponent<Props> = (props) => (
	<input {...props} />
);

export default Input;
