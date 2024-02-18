function updateList() {
	console.log("Data:");

	fetch("http://localhost:3000/getList")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.response.servers.forEach((server) => {
				const main = document.createElement("div");
				const name = document.createElement("h2");

				main.appendChild(name);

				list = document.getElementById("serverList");

				main.className = "server";
				name.innerHTML = server.name;

				list.appendChild(main);
			});
		});
}

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

updateList();
