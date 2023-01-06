##How to install and run:
1. Clone repository
2. In CMD or terminal run command 'npm install'
3. To run login test write command ''npx wdio run ./wdio.conf.js --suite loginTest'
4. To run redirect test write command ''npx wdio run ./wdio.conf.js --suite buttonsTest' (Before starting the login test, you should set the credentials that you want to log in and use in the test in the login_data.js file)

##Test Description:

test_login.js - This test verifies a positive login path to the Zoom website.

test_buttons.js - This test verifies whether after clicking on the individual 'Support', '1.888.799.9666', 'Request a Demo' buttons, we are redirected to the correct websites.

