import { execSync } from "child_process";
import readlineSync from "readline-sync";

const message = readlineSync.question("Enter commit message: ");

try {
  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });
  execSync("git push origin main", { stdio: "inherit" });
  execSync("npm run deploy", { stdio: "inherit" });
  console.log("✅ Deployment complete!");
} catch (err) {
  console.error("❌ Deployment failed:", err.message);
}