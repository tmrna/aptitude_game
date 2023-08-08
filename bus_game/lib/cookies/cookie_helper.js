const SECOND_AS_MILISECOND = 1000;
const MINUTE_AS_SECONDS = 60*SECOND_AS_MILISECOND;
const HOUR_AS_MINUTES = 60*MINUTE_AS_SECONDS;
const DAY_AS_HOUR = 24*HOUR_AS_MINUTES;
const dateBinder = new Date();

export const getCurrTimeMiliseconds = dateBinder.getTime;

export function makeDayAt(exTime) {
	const resDate = new Date();
	resDate.setDate(getCurrTimeMiliseconds(), exTime);
	return resDate;
}

export function notWhiteSpace(ch){
	return !(ch ==='\t' || ch ==='\n' || ch ===' ');
}
export function isWhiteSpace(ch) {
	return !notWhiteSpace(ch);
}

export function notEmptyString(targetStr) {
	if(targetStr.length === 0 ) return false;
	for( let i = 0; i < targetStr.length; ++i) {
		const ch = targetStr.charAt(i);
		if(notWhiteSpace(ch)) return true;
	}
	return false;
}

export function hasWhiteSpaceAt(str, index) {
	if(index >= str.length) throw new Error("index exceeded string length");
	return isWhiteSpace(str.charAt(index));
}

export function setExpireableCookie(cookieName, cookieValue, daysTillEx) {
	
	const daysTillExMilliseconds = daysTillEx*DAY_AS_HOUR;	
	const exDate = makeDayAt(daysTillExMilliseconds);

	let cookieExpirationInfo = "expires" + "=" + exDate.toUTCString();
	var cookieInfo = cookieName + "=" + cookieValue + cookieExpirationInfo;

	document.cookie = cookieInfo;
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
