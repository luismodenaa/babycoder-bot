import { readdirSync } from "fs";
import { join, resolve } from "path";
import { IEvent } from "../interfaces/events";
import { client } from "..";

const EventFiles = readdirSync(resolve(join(__dirname, "..", "events"))).filter(
  (file) => file.endsWith(".ts")
);

for (let i = 0; i < EventFiles.length; i++) {
  const eventFile: IEvent = require(resolve(
    join(__dirname, "..", "events", EventFiles[i])
  ));

  client.on(eventFile.EventInfo.name, (...args) =>
    eventFile.EventInfo.handler(client, ...args)
  );

  console.log(`[EVENTS] -> ${eventFile.EventInfo.name} carregado com sucesso`);
}
