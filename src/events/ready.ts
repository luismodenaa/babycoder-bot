import { Client } from "discord.js";
import { IEventOptions } from "../interfaces/events";

const EventHandler = (client: Client, ...args: any[]) => {
  console.log(`[READY] -> ${client.user?.username} online.`);
};

export const EventInfo: IEventOptions = {
  name: "ready",
  handler: EventHandler,
};
