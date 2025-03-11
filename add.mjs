import chalk from "chalk";
import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export function add(a, b) {
  logger.log("info", chalk.blue("adding " + a + " + " + b));
  return a + b;
}
