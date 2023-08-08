import { fmtCookieInfo, hasWhiteSpaceAt } from "./cookie_helper"

const SECOND_AS_MILISECOND = 1000;
const MINUTE_AS_SECONDS = 60*SECOND_AS_MILISECOND;
const HOUR_AS_MINUTES = 60*MINUTE_AS_SECONDS;
const DAY_AS_HOUR = 24*HOUR_AS_MINUTES;

export function setExpireableCookie(cookieName, cookieValue, daysTillEx, path="/") {
	const daysTillExMilliseconds = daysTillEx*DAY_AS_HOUR;	
	document.cookie = fmtCookieInfo(cookieName, cookieValue, daysTillExMilliseconds, path);
}

export function searchCookie(cookie, targetName) {
	const name = targetName + "=";
	var index = 0;
	while(hasWhiteSpaceAt(cookie, index) && index < cookie.length) ++index;
	
	if(cookie.indexOf(name) == index){
		const lenToOmitName = index + name.length;
		return cookie.substring(lenToOmitName, cookie.length);
	}
	return "";
}

export function getCookie(cookieName) {
	let decoded = decodeURIComponent(document.cookie);
	let allCookies = decoded.split(';');

	for(const cookie in allCookies) {
		const cookieSubstr = searchCookie(cookie, cookieName);
		if(cookieSubstr != "") return cookieSubstr;
	}
}

export function cookieExists(cookieName) {
	return getCookie(cookieName) != "";
}

export function deleteCookie(cookieName, path='/') {
	const placeHolderValue = "delete";
	const oneMs = 1;
	document.cookie = fmtCookieInfo(cookieName, placeHolderValue, oneMs, path);
}
