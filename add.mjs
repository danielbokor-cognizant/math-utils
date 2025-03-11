import chalk from "chalk";
import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

let ora;

try {
  ora = await import("ora");
} catch (e) {
  logger.log("error", "ora not installed; proceeding without spinners");
}

export function showSpinner() {
  if (ora) {
    const spinner = ora.default("processing...").start();
    setTimeout(() => spinner.succeed("Done!"), 3000);
  } else {
    logger.log("info", "processing...done");
  }
}

export function add(a, b) {
  logger.log("info", chalk.blue("adding " + a + " + " + b));
  return a + b;
}
