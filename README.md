# Preparation
1. Clone repository
2. In CMD or terminal run command 'npm install'
3. Set correct credentials in file zoom/test_data/login_data.js to run login test.

# How to install and run:
1. To run login test write command ''npx wdio run ./wdio.conf.js --suite loginTest'
2. To run redirect test write command ''npx wdio run ./wdio.conf.js --suite buttonsTest'

# Test Description:

*test_login.js* - This test verifies a positive login path to the Zoom website.

*test_buttons.js* - This test verifies whether after clicking on the individual 'Support', '1.888.799.9666', 'Request a Demo' buttons, we are redirected to the correct websites.

