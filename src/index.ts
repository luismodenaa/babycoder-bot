import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import "./utils/commands";
import "./utils/events";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`no ar 🚀`);
});

client.login(process.env.BOT_TOKEN);
