PDA activity

1. npm install
2. npm start (if doesn't work then npm --save-dev nodemon)
3. open localhost:3000
4.  unit -test folder -- write tests e.g. it should multiply, etc. (will be using mocha)
5. automation - triggering the tests to run... okay for backend, but how do we test front end?  e.g. that buttons work, etc.
6. selenium - npm run webdriver (if need to update: npm run webdriver-update)
7. to run tests - npm test - will run unit tests;
8. npm run protractor - to run integration tests
9. do not have to run chai


when we run backend tests (unit tests)
1. server started - in spring it was tomcat
2. tests run by spring
3. we had assertions which was junit's job

when we run front end tests (integration tests)
1. start server - use selenium - will launch localhost
2. run tests - using protractor
3. have assertions - will use chai
