import { setUserCookie, getUsername } from "../../../lib/cookies/user_cookies";		
import FullPopup, { doNothing } from "./full_popup";
import "../../../styles/popup.css";

export default function Signin({signInState, onTrigger = doNothing, onClose = doNothing, onInit = doNothing}) {
	onInit();
	function updateCookieAndOnClose(){
		const unameField = document.getElementById("usernameField");
		const uname = unameField.value;
		if(uname.length > 10){
			alert("usernames are limited to 10 characters");
			return;
		}
		const regexSpecials = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		if(regexSpecials.test(uname)){
			alert("special characters and whitespace are dissalowed");
			return;
		}
		setUserCookie(unameField.value);
		onClose();
	}
	return(
		<FullPopup trigger = {signInState} onTrigger = {onTrigger} onClose ={updateCookieAndOnClose} closeBtnTxt = {"Sign in"} >
			<div className = "centeredDivChild">
				<h1> BUFFER GAME </h1>
				<div className = "signInBox">
					<div className = "userNameWrapper">
						<label>Username: </label> 
						<input defaultValue={getUsername()} id = "usernameField"/> 
					</div>
				</div>
			</div>
		</FullPopup>
	)
} 
