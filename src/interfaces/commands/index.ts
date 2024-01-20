import { Client, Message } from "discord.js";

export interface ICommandOptions {
  name: string;
  permission: string;
  cooldown: number;
  handler(client: Client, args: string[], message?: Message): void;
}

export interface ICommand {
  CommandInfo: ICommandOptions;
}
