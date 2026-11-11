export default async (router, { services, database, getSchema }) => {
    const { ItemsService } = services;
    const schema = await getSchema();
    const scenarios = new ItemsService("scenarios", { schema });

    router.get("/", async (req, res) => {
        const { short_id } = req.query;

        try {
            if (!short_id) throw new Error("bad request");

            const results = await scenarios.readByQuery({
                filter: { short_id: { _eq: short_id } },
            });

            if (!results || results.length !== 1) throw new Error("not found");

            res.send({
                name: results[0].name,
                settings: results[0].settings,
            });
        } catch (error) {
            res.send({ state: "error", message: error.message }).status(500);
        }
    });
};
