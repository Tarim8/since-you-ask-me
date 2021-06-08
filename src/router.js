const express = require("express");

const data = require("./data");

const router = express.Router();

router.get("/", (req, res) => {
  const topic = "what happened in";
  const subject = "Series 9 of John Finnemore’s Souvenir Programme";
  const events = data.events;
  res.render("timeline", { topic, subject, events, isHome: true });
});

router.get("/what-happened-in/episode-:number(\\d+)", (req, res, next) => {
  const { number } = req.params;
  const episode = parseInt(number);
  if (episode < 1 || episode > 6) {
    next();
  } else {
    const topic = "what happened in";
    const subject = `Episode ${episode}`;
    const events = data.events.filter((event) => event.episode === episode);
    res.render("timeline", { topic, subject, events });
  }
});

router.get("/for-the-life-history-of/:id([a-z-]+)", (req, res, next) => {
  const { id } = req.params;
  const character = data.characters.find((c) => c.id === id);
  if (!character) {
    next();
  } else {
    const topic = "for the life history of";
    const subject = character.fullName;
    const events = data.events.filter((event) => event.characters.includes(id));
    res.render("timeline", { topic, subject, events });
  }
});

router.get("/for-a-tale-of/:id([a-z-]+)", (req, res, next) => {
  const { id } = req.params;
  const theme = data.themes.find((t) => t.id === id);
  if (!theme) {
    next();
  } else {
    const topic = "for a tale of";
    const subject = theme.subject;
    const events = data.events.filter((event) => event.themes.includes(id));
    res.render("timeline", { topic, subject, events });
  }
});

module.exports = router;
