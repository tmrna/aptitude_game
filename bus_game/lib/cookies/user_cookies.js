import { cookieExists, getCookie, setExpireableCookie, deleteCookie } from "./cookie_operations";

const USERNAME_STRING = "username";

export function setUserCookie(username) {
	if(cookieExists(USERNAME_STRING)) {
		deleteCookie(USERNAME_STRING);
	}

	const daysTillEx = 3;
	setExpireableCookie(USERNAME_STRING, username, daysTillEx);
}
