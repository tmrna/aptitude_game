import { getCookie, setExpireableCookie, deleteCookie } from "./cookie_operations";

const USERNAME_STRING = "username";
const DAYS_TILL_UNAME_EX = 3;

// sets username to the provided name
export function setUserCookie(username) {
	setExpireableCookie(USERNAME_STRING, username, DAYS_TILL_UNAME_EX);
}

// deletes username cookie
export function deleteUsername() {
	deleteCookie(USERNAME_STRING);
}

// retrieves value of username cookie
export function getUsername() {
	return getCookie(USERNAME_STRING);
}
