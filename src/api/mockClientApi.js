import delay from './delay'
const fullApplication = [
    {
        "id": 1,
        "externalId": "7c6bc27c-4170-4d5a-b5b8-26ce4d42fafd",
        "workflowProcessId": "66ba77a1-794f-4354-a3a9-88652ce6859c",
        "productId": 1,
        "ssn": "194105114960",
        "firstName": "Ola",
        "surName": "Mokko",
        "applicationDate": "2020-02-22T11:13:43.813",
        "applicationType": 0,
        "creditDecision": 0,
        "approvedTerms": {
            "amount": 249
        },
        "referrals": [
            {
                "id": 1,
                "applicationId": 1,
                "type": 1,
                "description": "Description8bddfcc8-8a91-4c4e-8cd9-42367232c684",
                "timestamp": "2018-03-22T10:22:58.513",
                "status": 0,
                "workflowProcessId": "66ba77a1-794f-4354-a3a9-88652ce6859c",
                "handledBy": null,
                "handledTimestamp": "0001-01-01T00:00:00",
                "reason": null
            },
            {
                "id": 2,
                "applicationId": 1,
                "type": 3,
                "description": "Descriptionc1fdb843-ec2b-4a5a-b7e9-fb48b0f5ea6d",
                "timestamp": "2018-03-22T10:22:58.513",
                "status": 0,
                "workflowProcessId": "66ba77a1-794f-4354-a3a9-88652ce6859c",
                "handledBy": null,
                "handledTimestamp": "0001-01-01T00:00:00",
                "reason": null
            }
        ]
    },
    {
        "id": 2,
        "externalId": "7c6bc27c-4170-4d5a-b5b8-26ce4d42fafd",
        "workflowProcessId": "66ba77a1-794f-4354-a3a9-88652ce6859c",
        "productId": 1,
        "ssn": "194105114970",
        "firstName": "Bengt",
        "surName": "Mokko",
        "applicationDate": "2020-02-22T11:13:43.813",
        "applicationType": 0,
        "creditDecision": 0,
        "approvedTerms": {
            "amount": 249
        },
        "referrals": [
            {
                "id": 1,
                "applicationId": 1,
                "type": 1,
                "description": "Description8bddfcc8-8a91-4c4e-8cd9-42367232c684",
                "timestamp": "2018-03-22T10:22:58.513",
                "status": 0,
                "workflowProcessId": "66ba77a1-794f-4354-a3a9-88652ce6859c",
                "handledBy": null,
                "handledTimestamp": "0001-01-01T00:00:00",
                "reason": null
            },
            {
                "id": 2,
                "applicationId": 1,
                "type": 3,
                "description": "Descriptionc1fdb843-ec2b-4a5a-b7e9-fb48b0f5ea6d",
                "timestamp": "2018-03-22T10:22:58.513",
                "status": 0,
                "workflowProcessId": "66ba77a1-794f-4354-a3a9-88652ce6859c",
                "handledBy": null,
                "handledTimestamp": "0001-01-01T00:00:00",
                "reason": null
            }
        ]
    }
]
const clients = [
    {
    "applicationId": 371,
    "ssn": "194105114955",
    "firstName": "Bengt",
    "surName": "Mokko",
    "applicationDate": "2018-03-19T12:37:17.517",
    "productName": "Traveller",
    "creditDecisionName": "Declined"
    },
    {
    "applicationId": 370,
    "ssn": "194105114960",
    "firstName": "Ola",
    "surName": "Mokko",
    "applicationDate": "2018-03-16T14:19:16.02",
    "productName": "Traveller",
    "creditDecisionName": "NotSet"
    },
    {
    "applicationId": 369,
    "ssn": "194105114970",
    "firstName": "Anna",
    "surName": "Mokko",
    "applicationDate": "2018-03-16T14:03:23.117",
    "productName": "Traveller",
    "creditDecisionName": "NotSet"
    }]


    class ClientApi {
        static getAllClients() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], clients));
            }, delay);
          });
        }

        static getFullApplication(id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {


                    resolve(Object.assign([], getFullApplicationById(fullApplication, id)));
                }, delay);
            });
        }


    }


    export default ClientApi;


function getFullApplicationById(FullApplicationArray, id) {
    const fullApp = FullApplicationArray.filter(fullApp => fullApp.id == id);
    if (fullApp) return fullApp[0]; //since filter returns an array, have to grab the first.
    return null;
}