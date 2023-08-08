const date = new Date();

export const getCurrTimeMiliseconds = date.getTime();

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

export function fmtCookieInfo(name, value, timeTillExMs, path='/') {
	const cookieExTime = timeTillExMs + getCurrTimeMiliseconds();
	const exDate = new Date();
	exDate.setDate(getCurrTimeMiliseconds(), cookieExTime);
	
	let cookieExpirationInfo = "expires=" + exDate.toUTCString() + ";";
	let cookiePath = "path=" + path;
	let cookieName = name + "=";
	var cookieInfo = cookieName + value + ';' + cookieExpirationInfo + cookiePath; 
	return cookieInfo;
}
