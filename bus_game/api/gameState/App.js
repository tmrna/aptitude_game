// why make this api:
// 	if the user closes the browser on the turn and they choose to log back in or page refresh they
// 	should be given the opportunity to continue their game
//

// responsibilities of this api:
// 	store game state after each move, retrieve game state upon request

const PORT = !process.env.PORT ? 8080 : process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json());

/*
 * setup game state with game ID 
 * if user is guest pass header with doNotStore: true
 * if gameover send in result:{
 * 	gameOver: true,
 * 	cards: {
 * 		card1: {
 * 			color: _______,
 * 			value: _______,
 * 			turnCt: ______,
 *			size: ________,
 * 		},
 * 		...
 * 	},
 * 	score: 37,
 * 	turns: 2,
 * 	bufferStatus: "[[occupied, color, turnCt], [false, "orange", 0]...]" // have client parse
 * }
 *
 *
 * general format
 *
 * request -> response
 * response = {
 * 	status: 200, // if game state is the same as in db, otherwise return error code + msg
 * 	result: {
 * 		gameOver: true,
 * 		cards: { // use these cards to reset game state so players can't just refresh until they get the
 * 			// card they want
 * 			card1: {
 * 				color: _,
 *	 			value: _,
 * 				turnCt: _,
 * 				size: _,
 * 			},
 * 			...
 * 		},
 * 		score: 88,
 * 		turns 42,
 *		bufferStatus: "[[false, 'orange', 0], [true, 'chocolate', 8], ...]",
 * 	},
 * 	header: {
 * 		gameMsg: "allocation too large", // empty if gameover is false
 *		// after game over upload score, delete game from db
 * 	}
 * }
 *
 * request(post or patch) = {
 * 	body: {
 * 		playerName: "playerOne",
 *		cards: {
 *			card1: ... 
 *		}
 *		bufferStatus:....
 *		etc.
 * 	},
 * 	header: {
 * 		doNotStore: false,
 * 		key: _
 * 	}
 *
 * }
 */
