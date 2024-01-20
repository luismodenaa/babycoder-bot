import { readdir, readdirSync } from "fs";
import { ICommand } from "../interfaces/commands";
import { join, resolve } from "path";

const Commands = new Map<string, ICommand>();

const commandsFolder = readdirSync(resolve(join(__dirname, "..", "commands")));

for (let i = 0; i < commandsFolder.length; i++) {
  const commandFolder = commandsFolder[i];

  readdir(
    resolve(join(__dirname, "..", "commands", commandFolder)),
    (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      files
        .filter((x) => x.endsWith(".ts") && x.startsWith("index"))
        .forEach((file) => {
          const command: ICommand = require(`../commands/${commandFolder}/${file}`);

          if (!command) return;

          Commands.set(command.CommandInfo.name, command);

          console.log(
            `[COMMANDS] -> ${command.CommandInfo.name} carregados com sucesso.`
          );
        });
    }
  );
}

export default Commands;
