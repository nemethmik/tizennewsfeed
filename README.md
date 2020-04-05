# A Tizen News Feed Demo Application with Flow Static Type Checking

I used Tizen Studio 3.6 to create the project using the General/News Feed sample, since today only TS can be used to debug applications running on the device or emulator. I gave a try to Tizen Web Visual Studio Code extension but it creats projects not compatible with TS, and cannot be used for debugging, so I removed completely the Tizen Web VSC extensions.

Then I created the github repository, inittialized git in the project folder (created with TS) with VSC git tools, added the github repo as remote, added gitignore and commited the original version.

Then I intialized the project with **flow init**, enabled flow type checking in app.js by adding **@flow** to the first line.

We badly need flow type definitions from Samsung for the Tizen API, since **flow-typed search tizen** didn't return any results, unfortunately.
