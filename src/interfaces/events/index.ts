import { Client } from "discord.js";

export interface IEventOptions {
  name: string;
  handler(cliente: Client, ...args: any[]): void;
}

export interface IEvent {
  EventInfo: IEventOptions;
}
