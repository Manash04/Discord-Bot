const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Create a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
    "DISCORD_TOKEN"
);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("CODE_ID"), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
