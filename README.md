Cypress Readme
Operating System:
•	Windows (7 & above).
•	macOS (10.9 & above).
•	Linux distributions.

Node.js:
Cypress required Node.js to be installed. The supported versions are:
•	Node.js 12 or later.

Browser support:
•	Chrome
•	Chromium
•	Electron

It's important to note that Cypress is designed to work primarily with Chrome and Chromium-based browsers. While it’s possible to test on other browsers through Electron, the primary focus is on Chrome-based browsers.

Cypress setup:
1.	Firstly, make sure you have Node.js installed on your machine. Then, initialize your project and install Cypress as a dev dependency.
2.	Create a new project directory (if not created already)
	mkdir my-cypress-project
	cd my-cypress-project
3.	Initialize a new Node.js project (if not initialized already)
•	npm init -y
	or
	yarn init -y
4.	Install Cypress as a dev dependency
•	npm install cypress --save-dev
	or
	yarn add cypress –dev
5.	Opening Cypress Test Runner
•	Once installed, you can open the Cypress test runner using the following command:
		npx cypress open
			or
		yarn cypress open
6.	This command will open the Cypress Test Runner, allowing you to execute tests interactively.
•	Running tests
		Inside the Cypress Test Runner, you’ll see your project’s folder structure on the left & and test files in the center. Click on a test file to run its tests.
