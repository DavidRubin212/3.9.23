import React from "react";
type User = {
	id: number;
	name: string;
	email: string;
};
type Props = {
	users: User[];
};

export default function Users(props: Props) {
	return (
		<>
			<input type="number" />
			<input type="text" />
			<input type="text" />
			<button type="submit">submit</button>
			<div>
				{props.users
					.map((user) => user.id + " " + user.name + " " + user.email )
					.join()}
			</div>
			<div>
				{props.users[0].id +
					" " +
				props.users[0].name +
					" " +
				props.users[0].email}
			</div>
		</>
	);
}
