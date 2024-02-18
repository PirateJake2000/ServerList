// Node backend server so I can ignore Cors

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

const apiKey = "";
let url = `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${apiKey}&filter=appid\\573090`; // should be routed via a backend for security reasons

app.get("/getList", (req, res) => {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			res.send(data);
		});
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

// {
//     addr: '135.181.227.142:25565',
//     gameport: 25564,
//     steamid: '90181414618897411',
//     name: 'StormLands 1 | discord.gg/3GMkGWSDgx',
//     appid: 573090,
//     gamedir: 'Stormworks',
//     version: '1.0.0.0',
//     product: 'Stormworks',
//     region: -1,
//     players: 0,
//     max_players: 32,
//     bots: 0,
//     map: 'Custom',
//     secure: false,
//     dedicated: true,
//     os: 'w',
//     gametype: 'v1.10.3-3-65'
//   }
