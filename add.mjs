import chalk from "chalk";

export function add(a, b) {
  console.log(chalk.blue("adding " + a + " + " + b));
  return a + b;
}
