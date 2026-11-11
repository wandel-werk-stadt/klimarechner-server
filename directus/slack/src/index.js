const logPrefix = "slack:";
import { IncomingWebhook } from "@slack/webhook";
const webhhookURL = process.env.SLACK_WEBHOOK_URL;

const webhook = new IncomingWebhook(webhhookURL);

export default {
    id: "slack",
    handler: (router) => {
        router.post("/send", async (req, res) => {
            try {
                await webhook.send(req.body);
                res.send({ state: "success" });
            } catch (error) {
                res.send({ state: "error", message: error.message }).status(
                    500
                );
            }
        });
    },
};
