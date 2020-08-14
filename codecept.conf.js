exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://dashboard-staging.buzzvil.com/',
      show: true,
      windowSize: '1200X1600'
    }
    // ,
    // AssertWrapper : {
    //   require: "codeceptjs-assert"
    // }
  },
  include: {
    I: './steps_file.js',
    StepLogin: './tests/testSteps/login_test.js',
    StepProperity: './tests/testSteps/properity_test.js',
    StepBudget: './tests/testSteps/budget_test.js',
    StepAllocation: './tests/testSteps/allocation_test.js',
    StepPlacement:'./tests/testSteps/placement_test.js',
    StepTearDown:'./tests/testSteps/tearDown_test.js',
    StepDataValodation:'./tests/testSteps/dataValidation.js'
  },
  mocha: {
    "reporterOptions": {
      "mochaFile": "output/result.xml"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    //features: './features/*.feature',
    features: './features/DA_LineItemCreation_steps.feature',
    steps: ['./step_definitions/DA_LineItemCreation_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
    }
  },
  
  tests: './tests/*_test.js',
  name: 'exec3'
}
