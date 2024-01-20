import { Client, EmbedBuilder, Message } from "discord.js";
import { database } from "../../utils/database";
import { ICommandOptions } from "../../interfaces/commands";

const CommandHandler = (client: Client, args: string[], message: Message) => {
  const UserData = database.Users.get(message.author.id);

  const embed = new EmbedBuilder()
    .setColor("#6606B0")
    .setTitle(`${message.author.tag} gay`)
    .addFields({
      name: "Bio",
      value: UserData.bio,
    });

  return message.reply({ embeds: [embed] });
};

export const CommandInfo: ICommandOptions = {
  name: "profile",
  permission: "user",
  cooldown: 3,
  handler: CommandHandler,
};
