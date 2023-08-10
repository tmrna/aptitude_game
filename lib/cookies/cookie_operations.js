import { fmtCookieInfo } from "./cookie_helper"

const SECOND_AS_MILISECOND = 1000;
const MINUTE_AS_SECONDS = 60*SECOND_AS_MILISECOND;
const HOUR_AS_MINUTES = 60*MINUTE_AS_SECONDS;
const DAY_AS_HOUR = 24*HOUR_AS_MINUTES;

// sets a cookie expiring on daysTillEx later
export function setExpireableCookie(cookieName, cookieValue, daysTillEx, path="/") {
	const daysTillExMilliseconds = daysTillEx*DAY_AS_HOUR;	
	const info = fmtCookieInfo(cookieName, cookieValue, daysTillExMilliseconds, path);
	document.cookie = info;
}

// cookie is the full string, targetName is the cookie name
// returns empty string if not found
export function searchCookie(cookie, targetName) {
	const name = targetName + "=";
	var index = cookie.search(name);
	if(index === -1) return "";
	return cookie.substring(index + name.length);
}

// returns the value of the given cookie field
export function getCookie(cookieName) {
	let decoded = decodeURIComponent(document.cookie);
	let allCookies = decoded.split(';');
	for(let i = 0; i < allCookies.length; ++i) {
		const cookie = allCookies[i];
		try{
			const value = searchCookie(cookie, cookieName);
			if(value != "") {
				return value;
			}
		}
		catch (e) {
		}
	}
	return "";
}

// checks if cookie exists
export function cookieExists(cookieName) {
	return getCookie(cookieName) != "";
}

// deletes given cookie by setting expiration to immediate
export function deleteCookie(cookieName, path='/') {
	const placeHolderValue = "delete";
	const oneMs = 1;
	document.cookie = fmtCookieInfo(cookieName, placeHolderValue, oneMs, path);
}
