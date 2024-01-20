import { Client, Message } from "discord.js";
import { ICommandOptions } from "../../interfaces/commands";

const CommandHandler = (client: Client, args: string[], message: Message) => {
  message.reply(`Client ms: ${Math.floor(client.ws.ping)}ms`);
};

export const CommandInfo: ICommandOptions = {
  name: "ping",
  permission: "user",
  cooldown: 3,
  handler: CommandHandler,
};
