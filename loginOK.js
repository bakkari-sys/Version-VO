
// Include the chrome driver
require("chromedriver");
  
// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();
  
// Get the credentials from the JSON file
let { email, pass } = require("./credentials.json");
let {taskName , taskDescription} = require("./taskList.json");
  
// Step 1 - Opening to do list sign in page
let tabToOpen =
    tab.get("http://localhost:3000/");
tabToOpen
    .then(function () {
  
        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 10000, // 10 seconds
            });
        return findTimeOutP;
    })
    .then(function () {
  
        // Step 2 - Finding the username input
        let promiseUsernameBox =
            tab.findElement(swd.By.xpath("/html/body/div/div/div/div/div[1]/input"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {
  
        // Step 3 - Entering the username
        let promiseFillUsername =
            usernameBox.sendKeys(email);
        return promiseFillUsername;
    })
    .then(function () {
        console.log(
            "Username entered successfully in" +
            "'login demonstration' for to dolist "
        );
  
        // Step 4 - Finding the password input
        let promisePasswordBox =
            tab.findElement(swd.By.xpath("/html/body/div/div/div/div/div[2]/input"));
        return promisePasswordBox;
    })
    .then(function (passwordBox) {
  
        // Step 5 - Entering the password
        let promiseFillPassword =
            passwordBox.sendKeys(pass);
        return promiseFillPassword;
    })
    .then(function () {
        console.log(
            "Password entered successfully in" +
            " 'login demonstration' for to do list"
        );
  
        // Step 6 - Finding the Sign In button
        let promiseSignInBtn = tab.findElement(
            swd.By.xpath("/html/body/div/div/div/div/div[3]/input")
        );
        return promiseSignInBtn;
    })
    .then(function (signInBtn) {
  
        // Step 7 - Clicking the Sign In button
        let promiseClickSignIn = signInBtn.click();
        return promiseClickSignIn;
    })
    .then(function () {
        console.log("Successfully signed in to do list");
    })
    .then(function () {
  
        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 10000, // 10 seconds
            });
        return findTimeOutP;
    })
    // finding taskName
    .then(function () {
  

        let taskNameBox =
            tab.findElement(swd.By.xpath("/html/body/div/div/div/div[2]/div[1]/input"));
        return taskNameBox;
    })
    .then(function (taskNameBox) {
  
        // Step 3 - Entering the TaskName
        let promisetaskName =
            taskNameBox.sendKeys(taskName);
        return promisetaskName;
    })
    .then(function () {
        console.log(
            "TASKe entered successfully in" +
            "'TASK' for to dolist "
        );
        

        })

        // finding taskDescription
    .then(function () {
  

        let taskDescriptionBox =
            tab.findElement(swd.By.xpath("/html/body/div/div/div/div[2]/div[2]/input"));
        return taskDescriptionBox;
    })
    .then(function (taskDescriptionBox) {
  
        // Step 3 - Entering the taskDescription
        let promisetaskDescription =
        taskDescriptionBox.sendKeys(taskDescription);
        return promisetaskDescription;
    })
    .then(function () {
        console.log(
            "taskDescriptionentered successfully in" +
            "'taskDescription' for to dolist "
        );
        // Step 6 - Finding the Ajout In button
        let promiseAjoutBtn = tab.findElement(
            swd.By.xpath("/html/body/div/div/div/div[2]/div[3]/button")
        );
        return promiseAjoutBtn;

        })
        .then(function (AjoutBtn) {
  
            // Step 7 - Clicking the Ajout In button
            let promiseClickAjout = AjoutBtn.click();
            return promiseClickAjout;
        })
        

    
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });