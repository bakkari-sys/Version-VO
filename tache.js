const {   By, Key, Builder } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await Driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[3]/button"));

await Driver.get("http://localhost:3000/tasks");
await Driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[1]/input")).sendKeys("test");
await Driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[2]/input")).sendKeys("test");
await Driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[3]/button",Key.ENTER));
}
example();



