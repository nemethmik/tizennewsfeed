# A Tizen News Feed Demo Application with Flow Static Type Checking

I used Tizen Studio 3.6 to create the [Tizen wearable web application project](https://developer.samsung.com/galaxy-watch-develop/creating-your-first-app/web.html) using the General/News Feed sample, since today only TS can be used to [debug applications](https://forum.developer.samsung.com/t/tizen-web-application-debugging-issue-with-chrome-v80-and-above/2161
) running on the device or emulator. I gave a try to Tizen Web Visual Studio Code extension but it creats projects not compatible with TS, and cannot be used for debugging, so I removed completely the Tizen Web VSC extensions.

Then I created the github repository, inittialized git in the project folder (created with TS) with VSC git tools, added the github repo as remote, added gitignore and commited the original version.

Then I intialized the project with **flow init**, enabled flow type checking in app.js by adding **@flow** to the first line. I used Flow [comment syntax](https://flow.org/en/docs/types/comments/) to preserve executable JS, no Babel or TSC is required.

We badly need flow type definitions from Samsung for the Tizen API, since **flow-typed search tizen** didn't return any results, unfortunately.
But, the Tizen Web API is excellently documented with [WebIDL](https://docs.tizen.org/application/web/api/latest/device_api/wearable/index.html), and I converted the Base, Application and Package API definitions to Flow definitions, which I made publicly available as [gist](https://gist.github.com/nemethmik/4fc5c4628fc8b2dacd5713c7cff29b46)  The video [How to make and use Flow type definitions for Tizen Web API](https://youtu.be/ouloWh4hvX4) explains the details.

The almost 50-minute accompanying explanation video is [Tizen Web Application Development with Flow Static Type Checking](https://youtu.be/XgKlFopXU0s). 

The pros, I like with Tizen.
- Tizen [Samsung Galaxy Watch](https://developer.samsung.com/galaxy-watch-develop) is selling ok, after the much more popular Apple Watch is the second best seller just before Fitbit. Google WearOS is dead, unfortunately, even Huawei dropped Android from its watches.
- Tizen provides direct support to build applications with JavaScript as well as [Microsoft.NET](https://docs.tizen.org/application/dotnet/index) Xamarin.Forms, two excellent languages that are easy to use and learn vs Swift/Apple Watch and Kotlin/Java for Android Wear OS. Tizen application programming with **JavaScript and C#** is a lot simpler than Apple or Android.
- I love my Samsung Note 8 with their pen support, Galaxy Watch is a perfect companion. I have Huawei Smart watch, but developing apps on a Android WearOS is not fun at all.

The cons with Tizen and Tizen Web development tools.
- Tizen mobile is dead and a business failure, unfortunately, no more Tizen phones are made any soon, I guess.
- Tizen Studio is far from today's standards. Samsung should focus on Visual Studio Code, the absolute top start today for web application development.
- Tizen Web extension module for VSC are practically unusable today, no debugging device/emulator. I'd make a React/TypeScript for Tizen project template for Create React App.
- Samsung Pay is not available in my country, unlike Apple Pay, and I can use my Apple Watch for paying. This is what I'd expect from Galaxy Watch, too. 
