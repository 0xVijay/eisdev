{
    "_id" : ObjectId("6579dc37059b556cc7e68709"),
    "aaaa_rec_misconfiguration" : [

    ],
    "cname_rec_misconfiguration" : [

    ],
    "dmarc_rec_misconfiguration" : [
        {
            "comments" : "",
            "recommendation" : "",
            "vuln_name" : "not_present"
        }
    ],
    "dnskey_rec_misconfiguration" : [
        {
            "comments" : "",
            "recommendation" : "",
            "vuln_name" : "not_present"
        }
    ],
    "domain_name" : "appviewx.com",
    "mx_rec_misconfiguration" : [

    ],
    "ns_rec_misconfiguration" : [

    ],
    "soa_rec_misconfiguration" : [
        {
            "comments" : "appviewx.com. 1783 IN SOA guss.ns.cloudflare.com. dns@cloudflare.com. 2327937833 10000 2400 604800 1800",
            "recommendation" : "",
            "vuln_name" : "soa_minimum_ttl"
        }
    ],
    "spf_rec_misconfiguration" : [

    ]
}

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



{
    state: {
        apiData: {
        response: {
            status: "success",
            domainName: searchTerm,
            domainInfo: {
            orgName: "AppViewX Inc",
            email: "priyeshkuarfaefafarframar@gmail.com",
            ownerName: "Anand Purushothaman",
            },
            card: [
            {
                name: "Phishing Domain",
                count: 30,
                values: ["go0gle.com", "github.com", "go0gle.com"],
            },
            {
                name: "Certificate Impersonation",
                count: 30,
                values: ["go0gle2.com", "go0gle2.com", "go0gle2.com"],
            },
            {
                name: "DNS Vulnerability",
                count: 30,
                values: ["go0gle.com", "go0gle.com", "go0gle.com"],
            }
            ],
            domainData: [
                {
                title: "Total Domain",
                value: "17",
                },
                {
                title: "Total Cost",
                value: "1823",
                },
                {
                title: "Total Register",
                value: "35",
                },
                {
                title: "Total Authority",
                value: "23",
                },
            ],
            certificateSpace: [
            { name: "Unknown", value: 45 },
            { name: "Expired Cert", value: 34 },
            { name: "Impersonation", value: 12 },
            ],
            dnsRecords: [
            { name: "A", value: 101, bg: "#B57AFD" },
            { name: "C Name", value: 10, bg: "#E3D5F3" },
            { name: "SOA", value: 27, bg: "#33115E" },
            { name: "AAA", value: 55, bg: "#CBCBCB" },
            { name: "MX", value: 27, bg: "#690CDB" },
            { name: "TXT", value: 8, bg: "#4B4B4B" },
            ],
            keySummary: [
            { name: "A", value: 101, bg: "#690CDB" },
            { name: "C Name", value: 10, bg: "#B57AFD" },
            { name: "SOA", value: 27, bg: "#737791" },
            ],
            certificateTransperancy: [
            {
                name: "GoDaddy.com",
                Issue: 10,
                Expiry: 48,
                DNS: 75,
            },
            {
                name: "Entrust.Inc",
                Issue: 65,
                Expiry: 56,
                DNS: 23,
            },
            ],
        }
        },
    },
}