//require('dotenv').config();
const newman = require('newman');

newman.run({
    //collection: `https://api.postman.com/collections/29633371-a85e0661-2248-4879-a3d4-5a5c4cf52a1a?access_key=PMAT-01K5E606RPPJB37EKGBVSG1NKS`,
    //environment: './environments/my-env.json', // optional
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
            logs: true,
            showOnlyFails: false,
            browserTitle: "API Test Report",
            title: "My Newman Report"
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
