

function testlinkResultAsync(){

    var TestlinkConnect = require("testlink-connect");
    var tc = new TestlinkConnect("cd6f691af3ee271c4cb7cbc88362fcee", "http://testlink.buzzvil-internal.com/lib/api/xmlrpc/v1/xmlrpc.php");


    var objExternal   = {
        user: "bradley.cho@buzzvil.com",
        testplanid: "6710",
        buildid: "46",
        testcaseexternalid: "MFP-2",
        notes: "aaaaa",
        status: "p",
        overwrite: "false"
    };
 
    tc.reportTCResult(objExternal ,function(callback){ console.log(callback); });
}
    // tc.getTestLinkVersion(function(callback){ 
    //     console.log(callback); 
    //  });
    
    // const TestLink = require('testlink-xmlrpc');

// var obj = {
//     testprojectid:"6706",
//     testsuiteid:"6707",
//     testcasename:"Test current time",
//     authorlogin:"bradley.cho@buzzvil.com",
//     summary:"A summary"
// };
// console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
// tc.createTestCase(obj,function(callback){ console.log(callback); });


// // let testlink = new TestLink({
// //     host: "testlink.buzzvil-internal.com/",
// //     port: 8080, // Set if you are not using default port
// //     secure: false, // Use https, if you are using http, set to false.
// //     apiKey: "cd6f691af3ee271c4cb7cbc88362fcee", // The API KEY from TestLink. Get it from user profile.
// // });

// // async function checkConnection() {
// //    console.log("aaaaaaaaaaaaaaaaaaaaaa");

// //     let ping = await testlink.sayHello();
// //     if (ping === "Hello!"){
// //         console.log("connection established");
// //     }else{
// //         console.log("dddddddddddddddddddd");
// //     }

// //     testlink.checkDevKey({devKey: 'APIKEY_to_check'}).then(reply => {
// //         if (reply === true)
// //             console.log("API KEY is valid");
// //         else
// //             console.log("API KEY is invalid");
// //     });
// // }

