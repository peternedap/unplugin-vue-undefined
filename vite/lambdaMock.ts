import { type PluginOption } from "vite";

const lambdaMock: PluginOption = {
    name: "vite-plugin-auth-lambda-mock",
    configureServer(server) {
        server.middlewares.use("/", async (req, res, next) => {
            if(req.originalUrl.includes("otherScript")) {
                return res.writeHead(401, { }).end();
            }
            return next();
        });
    },
};

export default lambdaMock;
