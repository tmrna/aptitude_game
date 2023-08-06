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
 * 	status: 200, // if game state is the same as in db
 * 	result: {
 * 		gameOver: true,
 * 		cards: {
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
 * 		playerName: "playerOne",
 * 		doNotStore: false,
 * 		gameMsg: "allocation too large", // empty if gameover is false
 * 	}
 * }
 *
 * request = {
 * 	body: {
 * 		playerName: "playerOne",
 *		cardSelected: "card1",
 * 	},
 * 	header: {
 * 		doNotStore: false,
 * 	}
 *
 * }
 */
