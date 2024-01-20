import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
import "./utils/commands";
import "./utils/events";

client.on("ready", () => {
  console.log(`no ar 🚀`);
});

client.login(process.env.BOT_TOKEN);
