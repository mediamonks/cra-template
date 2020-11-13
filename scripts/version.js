#!/usr/bin/env node
const { argv } = require("process");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

const [, , versionArg] = process.argv;

const TEMPLATES = ["base", "standard"];

(async () => {
  let version;

  for (const template of TEMPLATES) {
    const { stderr, stdout } = await exec(`npm version ${versionArg} --prefix=${template}`);

    version = stdout.trim();

    if (stderr) {
      console.error("stderr:", stderr);
      process.exit(1);
    }
  }

  await exec(`git add *package.json`);
  await exec(`git commit -m "Bump version to ${version}"`);
  await exec(`git tag -a ${version} -m "Bump version to ${version}"`);

  console.log(`Successfully updated the templates to version ${version}`);
})();
