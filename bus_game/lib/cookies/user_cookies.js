import { getCookie, setExpireableCookie, deleteCookie } from "./cookie_operations";

const USERNAME_STRING = "username";
const DAYS_TILL_UNAME_EX = 3;

export function setUserCookie(username) {
	setExpireableCookie(USERNAME_STRING, username, DAYS_TILL_UNAME_EX);
}

export function deleteUsername() {
	deleteCookie(USERNAME_STRING);
}

export function getUserName() {
	return getCookie(USERNAME_STRING);
}

export const GUEST_TAG = '$GUEST$';
