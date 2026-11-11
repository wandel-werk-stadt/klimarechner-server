import { nanoid } from "nanoid";

export default ({ filter }) => {
    filter("items.create", (payload, { collection }) => {
        console.log("creating items", collection);
        if (collection !== "scenarios") return;

        if (Array.isArray(payload)) {
            return payload.map((item) => {
                item.short_id = nanoid(10);
            });
        }

        payload.short_id = nanoid(10);
        return payload;
    });
};
