module.exports = {
  name: "pause",
  description: "Pause a song that is playing",
  category: "music",
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    if (!message.member.voice.channel) {
      return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
    }

    bot.player.pause(message);
    message.react("⏯️");
  },
};
