import HelloPage from "../pages/hello.page";

describe("My hello page", () => {
  it("test", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitle("hello");
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
