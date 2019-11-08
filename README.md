# docspring

DocSpring - JavaScript client for docspring
DocSpring is a service that helps you fill out and sign PDF templates.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: 1.0.0
- Build package: com.docspring.codegen.DocSpringJavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install docspring --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your docspring from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('docspring')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DocSpring = require('docspring');

var defaultClient = DocSpring.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME'
api_token_basic.password = 'YOUR PASSWORD'

var api = new DocSpring.PDFApi()
var templateId = tpl_000000000000000001; // {String} 
var requestBody = [null]; // {[Object]} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.batchGeneratePdfV1(templateId, requestBody, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.docspring.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DocSpring.PDFApi* | [**batchGeneratePdfV1**](docs/PDFApi.md#batchGeneratePdfV1) | **POST** /templates/{template_id}/submissions/batch | Generates multiple PDFs
*DocSpring.PDFApi* | [**batchGeneratePdfs**](docs/PDFApi.md#batchGeneratePdfs) | **POST** /submissions/batches | Generates multiple PDFs
*DocSpring.PDFApi* | [**combinePdfs**](docs/PDFApi.md#combinePdfs) | **POST** /combined_submissions?v&#x3D;2 | Merge submission PDFs, template PDFs, or custom files
*DocSpring.PDFApi* | [**combineSubmissions**](docs/PDFApi.md#combineSubmissions) | **POST** /combined_submissions | Merge generated PDFs together
*DocSpring.PDFApi* | [**createCustomFileFromUpload**](docs/PDFApi.md#createCustomFileFromUpload) | **POST** /custom_files | Create a new custom file from a cached presign upload
*DocSpring.PDFApi* | [**createDataRequestToken**](docs/PDFApi.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
*DocSpring.PDFApi* | [**createFolder**](docs/PDFApi.md#createFolder) | **POST** /folders/ | Create a folder
*DocSpring.PDFApi* | [**createTemplate**](docs/PDFApi.md#createTemplate) | **POST** /templates | Upload a new PDF template with a file upload
*DocSpring.PDFApi* | [**createTemplateFromUpload**](docs/PDFApi.md#createTemplateFromUpload) | **POST** /templates?v&#x3D;2 | Create a new PDF template from a cached presign upload
*DocSpring.PDFApi* | [**deleteFolder**](docs/PDFApi.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
*DocSpring.PDFApi* | [**expireCombinedSubmission**](docs/PDFApi.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
*DocSpring.PDFApi* | [**expireSubmission**](docs/PDFApi.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
*DocSpring.PDFApi* | [**generatePDF**](docs/PDFApi.md#generatePDF) | **POST** /templates/{template_id}/submissions | Generates a new PDF
*DocSpring.PDFApi* | [**getCombinedSubmission**](docs/PDFApi.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
*DocSpring.PDFApi* | [**getDataRequest**](docs/PDFApi.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
*DocSpring.PDFApi* | [**getPresignUrl**](docs/PDFApi.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL so that you can upload a file to our AWS S3 bucket
*DocSpring.PDFApi* | [**getSubmission**](docs/PDFApi.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
*DocSpring.PDFApi* | [**getSubmissionBatch**](docs/PDFApi.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
*DocSpring.PDFApi* | [**getTemplate**](docs/PDFApi.md#getTemplate) | **GET** /templates/{template_id} | Get a single template
*DocSpring.PDFApi* | [**getTemplateSchema**](docs/PDFApi.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
*DocSpring.PDFApi* | [**listFolders**](docs/PDFApi.md#listFolders) | **GET** /folders/ | Get a list of all folders
*DocSpring.PDFApi* | [**listTemplates**](docs/PDFApi.md#listTemplates) | **GET** /templates | Get a list of all templates
*DocSpring.PDFApi* | [**moveFolderToFolder**](docs/PDFApi.md#moveFolderToFolder) | **POST** /folders/{folder_id}/move | Move a folder
*DocSpring.PDFApi* | [**moveTemplateToFolder**](docs/PDFApi.md#moveTemplateToFolder) | **POST** /templates/{template_id}/move | Move Template to folder
*DocSpring.PDFApi* | [**renameFolder**](docs/PDFApi.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
*DocSpring.PDFApi* | [**testAuthentication**](docs/PDFApi.md#testAuthentication) | **GET** /authentication | Test Authentication
*DocSpring.PDFApi* | [**updateDataRequest**](docs/PDFApi.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request


## Documentation for Models

 - [DocSpring.AuthenticationError](docs/AuthenticationError.md)
 - [DocSpring.AuthenticationSuccessResponse](docs/AuthenticationSuccessResponse.md)
 - [DocSpring.CombinePdfsData](docs/CombinePdfsData.md)
 - [DocSpring.CombinedSubmission](docs/CombinedSubmission.md)
 - [DocSpring.CombinedSubmissionAction](docs/CombinedSubmissionAction.md)
 - [DocSpring.CombinedSubmissionData](docs/CombinedSubmissionData.md)
 - [DocSpring.CreateCombinedSubmissionResponse](docs/CreateCombinedSubmissionResponse.md)
 - [DocSpring.CreateCustomFileData](docs/CreateCustomFileData.md)
 - [DocSpring.CreateCustomFileResponse](docs/CreateCustomFileResponse.md)
 - [DocSpring.CreateFolderData](docs/CreateFolderData.md)
 - [DocSpring.CreateSubmissionBatchResponse](docs/CreateSubmissionBatchResponse.md)
 - [DocSpring.CreateSubmissionBatchSubmissionsResponse](docs/CreateSubmissionBatchSubmissionsResponse.md)
 - [DocSpring.CreateSubmissionDataRequestData](docs/CreateSubmissionDataRequestData.md)
 - [DocSpring.CreateSubmissionDataRequestTokenResponse](docs/CreateSubmissionDataRequestTokenResponse.md)
 - [DocSpring.CreateSubmissionDataRequestTokenResponseToken](docs/CreateSubmissionDataRequestTokenResponseToken.md)
 - [DocSpring.CreateSubmissionResponse](docs/CreateSubmissionResponse.md)
 - [DocSpring.CreateTemplateData](docs/CreateTemplateData.md)
 - [DocSpring.CustomFile](docs/CustomFile.md)
 - [DocSpring.Error](docs/Error.md)
 - [DocSpring.Folder](docs/Folder.md)
 - [DocSpring.FoldersFolder](docs/FoldersFolder.md)
 - [DocSpring.InvalidRequest](docs/InvalidRequest.md)
 - [DocSpring.MoveFolderData](docs/MoveFolderData.md)
 - [DocSpring.MoveTemplateData](docs/MoveTemplateData.md)
 - [DocSpring.PendingTemplate](docs/PendingTemplate.md)
 - [DocSpring.RenameFolderData](docs/RenameFolderData.md)
 - [DocSpring.Submission](docs/Submission.md)
 - [DocSpring.SubmissionAction](docs/SubmissionAction.md)
 - [DocSpring.SubmissionBatch](docs/SubmissionBatch.md)
 - [DocSpring.SubmissionBatchData](docs/SubmissionBatchData.md)
 - [DocSpring.SubmissionData](docs/SubmissionData.md)
 - [DocSpring.SubmissionDataBatchRequest](docs/SubmissionDataBatchRequest.md)
 - [DocSpring.SubmissionDataRequest](docs/SubmissionDataRequest.md)
 - [DocSpring.Template](docs/Template.md)
 - [DocSpring.Templatesv2Template](docs/Templatesv2Template.md)
 - [DocSpring.Templatesv2TemplateDocument](docs/Templatesv2TemplateDocument.md)
 - [DocSpring.Templatesv2TemplateDocumentMetadata](docs/Templatesv2TemplateDocumentMetadata.md)
 - [DocSpring.UpdateDataRequestResponse](docs/UpdateDataRequestResponse.md)
 - [DocSpring.UpdateSubmissionDataRequestData](docs/UpdateSubmissionDataRequestData.md)


## Documentation for Authorization


### api_token_basic

- **Type**: HTTP basic authentication

