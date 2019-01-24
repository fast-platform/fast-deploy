import Agenda from "agenda";

const agenda = new Agenda({
  db: {
    address: process.env.MONGO_URL,
    collection: "agenda"
  },
  defaultLockLifetime: 6000
});

agenda.define("worker", async (job, done) => {
  // Here is the function that you want to run from Formio
  // await func()
  done();
});

const timeInterval = "20 seconds";

const execute = async agenda => {};
(async function() {
  await agenda.on("ready", async () => {
    await agenda.start();
    await agenda.every(timeInterval, ["run worker"]);
  });
})();
