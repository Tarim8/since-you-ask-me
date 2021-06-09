const express = require("express");

const data = require("./data");

const router = express.Router();

router.get("/", handleSortQuery, (req, res) => {
  const topic = "what happened in";
  const subject = "Series 9 of John Finnemore’s Souvenir Programme";
  const events = getEvents(() => true, res.locals.sortChronologically);
  res.render("timeline", { topic, subject, events, isHome: true });
});

router.get(
  "/what-happened-in/episode-:number(\\d+)",
  handleSortQuery,
  (req, res, next) => {
    const { number } = req.params;
    const episode = parseInt(number);
    if (episode < 1 || episode > 6) {
      next();
    } else {
      const topic = "what happened in";
      const subject = `Episode ${episode}`;
      const events = getEvents(
        (event) => event.episode === episode,
        res.locals.sortChronologically
      );
      res.render("timeline", { topic, subject, events });
    }
  }
);

router.get(
  "/for-the-life-history-of/:id([a-z-]+)",
  handleSortQuery,
  (req, res, next) => {
    const { id } = req.params;
    const character = data.characters.find((c) => c.id === id);
    if (!character) {
      next();
    } else {
      const topic = "for the life history of";
      const subject = character.fullName;
      const events = getEvents(
        (event) => event.characters.includes(id),
        res.locals.sortChronologically
      );
      res.render("timeline", { topic, subject, events });
    }
  }
);

router.get(
  "/for-a-tale-of/:id([0-9a-z-]+)",
  handleSortQuery,
  (req, res, next) => {
    const { id } = req.params;
    const theme = data.themes.find((t) => t.id === id);
    if (!theme) {
      next();
    } else {
      const topic = "for a tale of";
      const subject = theme.subject;
      const events = getEvents(
        (event) => event.themes.includes(id),
        res.locals.sortChronologically
      );
      res.render("timeline", { topic, subject, events });
    }
  }
);

function handleSortQuery(req, res, next) {
  if (req.originalUrl[req.originalUrl.length - 1] === "?") {
    res.redirect(req.originalUrl.substring(0, req.originalUrl.length - 1));
  } else {
    res.locals.sortChronologically =
      req.query["starting-from-the-beginning"] !== undefined;
    next();
  }
}

function getEvents(predicate, sortChronologically) {
  const events = data.events.filter(predicate);
  return sortChronologically ? events.sort(chronologicalOrdering) : events;
}

function chronologicalOrdering(e1, e2) {
  if (e1.year !== e2.year) {
    return e1.year - e2.year;
  } else {
    return e1.inYearSortOrder - e2.inYearSortOrder;
  }
}

module.exports = router;
