**
The repository contains two tests:
- website login test https://zoom.us/signin#/login (test_login.js)
- and verification of redirection of buttons ,,Support'', ''request a demo'' and ''1.888.799.9666'' (test_buttons.js)
In order to run any of the tests, clone the repository to a folder on your computer, then execute the command "npx wdio wdio.conf.js --suite loginTest" (to run the login test)
or wdio wdio.conf.js --suite buttonsTest (to run redirect test)
