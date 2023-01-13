const Harbor = require("@beam-me-up/harbor");
const { expect } = require("chai");

describe("Bridge test", () => {
  // Variables we can access in every test
  let harbor;
  let testnet;
  let testnetName = "aa";

  const TIMEOUT = 900000;

  beforeAll(async () => {
    // Fill the Harbor object in with your keys!
    harbor = new Harbor({
      userKey: "KjQk6pDuP2ejUbyZ2DRJBD",
      projectKey: "fdjxiBCc7HqCAZdEhvoFuT",
      baseUrl: "https://develop-api.tech.goharbor.com",
    });

    // Authenticate below this line!
    await harbor.authenticate();

    // Apply your configuration below this line!
    testnet = await harbor.testnet(testnetName);
  }, TIMEOUT);

  // Fill in each of these tests!
  it("Check if the Testnet is running", async () => {
    expect(testnet.status).to.be.equal("RUNNING");
  });
});
