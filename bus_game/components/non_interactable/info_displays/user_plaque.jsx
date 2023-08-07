import { userPlaqueStyle } from "./info_display_styles"

export default function UserPlaque(username) {
	return (
		<div className={userPlaqueStyle}>
			<h1>fd: {username}</h1>
		</div>
	)
}
