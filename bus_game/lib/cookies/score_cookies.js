import { deleteCookie, getCookie, setExpireableCookie } from "./cookie_operations";
import { GUEST_TAG, getUsername } from "./user_cookies";

const SCORE_NAME = "scores";
const SCORE_DAYS_TILL_EX = 30;

/*
 * scores=user1:score1,user2:score2,user3:score3....user(n):score(n);
 */

function replaceScoreString(scoreString){
	setExpireableCookie(SCORE_NAME, scoreString, SCORE_DAYS_TILL_EX);
}

export function deserializeScores() {
	const scoreboardString = getCookie(SCORE_NAME);
	const scoreboardStringArray = scoreboardString.split(',');
	const scoreboardArray = [];

	for(let i = 0; i < scoreboardStringArray.length; ++i) {
		const scoreInstance = scoreboardStringArray[i];
		var usernameScore = scoreInstance.split(':');
		if(usernameScore.length === 2) {
			usernameScore[1] = Number(usernameScore[1]);
			scoreboardArray.push(usernameScore);
		}
	}

	return scoreboardArray;
}

export function pushScore(scoreNumber) {
	if(isNaN(scoreNumber)) throw new TypeError("score must be a number.");

	var scoreString = getCookie(SCORE_NAME);
	const username = getUsername();

	if(username === GUEST_TAG) return;

	if(updateScoreCookie(scoreNumber, scoreString, username)) return;
	
	if(scoreString.length > 0) scoreString += ',';
	if(username.length > 0){
		scoreString += username + ':' + scoreNumber.toString();
		replaceScoreString(scoreString);
	}
}

export function updateScoreCookie(newScore, scoreString, username) {
	const index = scoreString.search(username);
	if(index === -1) {
		return false;
	}

	const usernameOffset = index + username.length + 1;
	const toTruncate = scoreString.substring(usernameOffset);
	const endScoreRegion = toTruncate.search(',');

	// at this point we know the username is in the string 
	// endScoreRegion === -1 means we are at the last score
	
	if(endScoreRegion === -1){
		const oldScore = Number(scoreString.substring(usernameOffset));	
		if(newScore > oldScore) {
			var newScoreString = scoreString.substring(0, usernameOffset);
			newScoreString += newScore.toString();
			replaceScoreString(newScoreString);
		}	
	}
	else{
		const oldScore = Number(scoreString.substring(usernameOffset, endScoreRegion));
		if(newScore > oldScore){
			var newScoreString = scoreString.substring(0, usernameOffset);
			const upperRegion = scoreString.substring(endScoreRegion);
			newScoreString += newScore.toString();
			newScoreString += upperRegion;
			replaceScoreString(newScoreString)
		}
	}
	return true;
}

export function clearScoreboard() {
	deleteCookie(SCORE_NAME);
}

export function sortScoreboard() {
	const scoreString = getCookie(SCORE_NAME);
	var userScoreArray = scoreString.split(',');
}
