const SteamAPI = require("steamapi");
const dotenv = require("dotenv");

dotenv.config();

const steam = new SteamAPI(process.env.STEAM_API_KEY);

const gameId = "381210";

function getGameDetail(username) {
	steam
		.resolve(`https://steamcommunity.com/id/${username}`)
		.then(async (id) => {
			console.log(id);

			// steam.getUserSummary(id).then((summary) => {
			// 	console.log(summary);
			// });

			steam.getUserStats(id, gameId).then((summary) => {
				console.log(summary);
			});
		})
		.catch((e) => console.log("User Not Found"));
}

getGameDetail("serhatgundogdu");
