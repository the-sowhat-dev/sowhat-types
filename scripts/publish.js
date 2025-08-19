#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("❌ Error: Version argument is missing");
  console.error('Usage: npm run publish-new-version "x.y.z"');
  process.exit(1);
}

const newVersion = args[0];

// Validate version format (basic semver validation)
const semverRegex = /^\d+\.\d+\.\d+$/;
if (!semverRegex.test(newVersion)) {
  console.error("❌ Error: Invalid version format. Please use semantic versioning (x.y.z)");
  console.error(`Provided: ${newVersion}`);
  process.exit(1);
}

// Read current package.json
const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const currentVersion = packageJson.version;

// Compare versions
function compareVersions(v1, v2) {
  const parts1 = v1.split(".").map(Number);
  const parts2 = v2.split(".").map(Number);

  for (let i = 0; i < 3; i++) {
    if (parts1[i] > parts2[i]) return 1;
    if (parts1[i] < parts2[i]) return -1;
  }
  return 0;
}

const versionComparison = compareVersions(newVersion, currentVersion);

if (versionComparison <= 0) {
  console.error("❌ Error: New version must be higher than current version");
  console.error(`Current version: ${currentVersion}`);
  console.error(`Provided version: ${newVersion}`);
  process.exit(1);
}

try {
  console.log(`📦 Publishing ${packageJson.name} from v${currentVersion} to v${newVersion}...`);

  // Update package.json version
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`✅ Updated package.json version to ${newVersion}`);

  // Build the project
  console.log("🔨 Building project...");
  execSync("npm run build", { stdio: "inherit" });

  // Publish to npm
  console.log("🚀 Publishing to npm...");
  execSync("npm publish", { stdio: "inherit" });

  console.log(`🎉 Successfully published ${packageJson.name}@${newVersion} to npm!`);
} catch (error) {
  console.error("❌ Error during publish process:", error.message);

  // Revert package.json version on failure
  packageJson.version = currentVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`🔄 Reverted package.json version back to ${currentVersion}`);

  process.exit(1);
}
