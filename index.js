function displayManifesto() {
  console.log("\n\n\x1b[36m%s\x1b[0m", "=====================================================");
  console.log("\x1b[36m%s\x1b[0m", "    A Manifesto on Self-Respect for Developers");
  console.log("\x1b[36m%s\x1b[0m", "=====================================================");

  console.log("\nCongratulations. You have taken the first step.");
  console.log("By installing 'self-respect', you've acknowledged a fundamental truth:");
  console.log("that your well-being is as critical as your code's performance.\n");

  console.log("\x1b[33m%s\x1b[0m", "Let this be your guide:\n");

  console.log("1. \x1b[32mThou shalt not endlessly debug after midnight.\x1b[0m Sleep is not a sign of weakness; it's a feature, not a bug.");
  console.log("2. \x1b[32mThou shalt not accept impossible deadlines.\x1b[0m You are a developer, not a time traveler.");
  console.log("3. \x1b[32mThou shalt value thy work.\x1b[0m Your skills are the result of countless hours of learning and frustration. Do not undervalue them.");
  console.log("4. \x1b[32mThou shalt take proper breaks.\x1b[0m A walk, a coffee, a moment of silence – these are not distractions, but necessary garbage collection cycles for your mind.");
  console.log("5. \x1b[32mThou shalt not live on a diet of pure caffeine and despair.\x1b[0m Your body is the hardware. Maintain it.");
  console.log("6. \x1b[32mThou shalt celebrate small victories.\x1b[0m Fixed a bug? Merged a feature? Survived a meeting? That's a win.");
  console.log("7. \x1b[32mThou shalt ask for help.\x1b[0m You are not an isolated function. You are part of a larger system. Collaboration is key.");
  console.log("8. \x1b[32mThou shalt reject 'good enough' code when you know you can do better (within reason).\x1b[0m Respect your craft.");
  console.log("9. \x1b[32mThou shalt have a life outside of code.\x1b[0m The world is a vast and beautiful place. Explore it.");
  console.log("10. \x1b[32mThou shalt remember: you are more than your code.\x1b[0m Your value is not determined by your commit history.\n");

  console.log("You have now installed \x1b[35mself-respect\x1b[0m. May your builds be swift, your bugs be shallow, and your pull requests be approved.");
  console.log("\nNow, go touch some grass.\n");
}

if (require.main === module) {
  // This block runs if index.js is executed directly (e.g., via `node index.js` for postinstall)
  displayManifesto();
}

module.exports = displayManifesto;