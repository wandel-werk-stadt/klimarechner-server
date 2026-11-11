import copy from "rollup-plugin-copy";

export default {
    plugins: [
        copy({
            targets: [
                {
                    src: "./dist/index.js",
                    dest: "./../extensions/hooks/short-id",
                },
            ],
            hook: "writeBundle",
        }),
    ],
};
