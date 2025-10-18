async function discordChecker() {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/588805007181086726');
      const splingus = await response.json();
      document.getElementById("status-details").innerHTML = `
      ${splingus.data.discord_user.username} is ${splingus.data.discord_status}
      `
      const statusColors = {
        online: "#5dff8a",
        idle: "#cb9654",
        dnd: "#d83a43",
        offline: "#5d5d5d",
      };
      document.getElementById("status-blob").style.backgroundColor = statusColors[splingus.data.discord_status];
    } catch (error) {
      console.error("failed to fetch!!", error);
    }
};

discordChecker();
setInterval(discordChecker, 2000);