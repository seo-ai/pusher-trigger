const core = require("@actions/core");
const github = require("@actions/github");
const Pusher = require("pusher");

try {
  const pusher = new Pusher({
    appId: core.getInput("app-id"),
    key: core.getInput("app-key"),
    secret: core.getInput("app-secret"),
    cluster: core.getInput("app-cluster"),
  });

  pusher.trigger(
    core.getInput("channel"),
    core.getInput("event"),
    JSON.parse(core.getInput("message"))
  );

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
