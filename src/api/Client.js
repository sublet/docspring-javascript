/**
 * API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      "./PDFApi",
      "../ApiClient",
      "../model/AuthenticationError",
      "../model/AuthenticationSuccessResponse",
      "../model/CombinePdfsData",
      "../model/CombinedSubmission",
      "../model/CombinedSubmissionData",
      "../model/CreateCombinedSubmissionResponse",
      "../model/CreateCustomFileData",
      "../model/CreateCustomFileResponse",
      "../model/CreateSubmissionBatchResponse",
      "../model/CreateSubmissionDataRequestTokenResponse",
      "../model/CreateSubmissionResponse",
      "../model/CreateTemplateData",
      "../model/Error",
      "../model/InvalidRequest",
      "../model/PendingTemplate",
      "../model/Submission",
      "../model/SubmissionBatch",
      "../model/SubmissionBatchData",
      "../model/SubmissionData",
      "../model/SubmissionDataRequest",
      "../model/Template",
      "../model/UpdateDataRequestResponse",
      "../model/UpdateSubmissionDataRequestData"
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("./PDFApi"),
      require("../ApiClient"),
      require("../model/AuthenticationError"),
      require("../model/AuthenticationSuccessResponse"),
      require("../model/CombinePdfsData"),
      require("../model/CombinedSubmission"),
      require("../model/CombinedSubmissionData"),
      require("../model/CreateCombinedSubmissionResponse"),
      require("../model/CreateCustomFileData"),
      require("../model/CreateCustomFileResponse"),
      require("../model/CreateSubmissionBatchResponse"),
      require("../model/CreateSubmissionDataRequestTokenResponse"),
      require("../model/CreateSubmissionResponse"),
      require("../model/CreateTemplateData"),
      require("../model/Error"),
      require("../model/InvalidRequest"),
      require("../model/PendingTemplate"),
      require("../model/Submission"),
      require("../model/SubmissionBatch"),
      require("../model/SubmissionBatchData"),
      require("../model/SubmissionData"),
      require("../model/SubmissionDataRequest"),
      require("../model/Template"),
      require("../model/UpdateDataRequestResponse"),
      require("../model/UpdateSubmissionDataRequestData")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.Client = factory(
      root.DocSpring.PDFApi,
      root.DocSpring.ApiClient,
      root.DocSpring.AuthenticationError,
      root.DocSpring.AuthenticationSuccessResponse,
      root.DocSpring.CombinePdfsData,
      root.DocSpring.CombinedSubmission,
      root.DocSpring.CombinedSubmissionData,
      root.DocSpring.CreateCombinedSubmissionResponse,
      root.DocSpring.CreateCustomFileData,
      root.DocSpring.CreateCustomFileResponse,
      root.DocSpring.CreateSubmissionBatchResponse,
      root.DocSpring.CreateSubmissionDataRequestTokenResponse,
      root.DocSpring.CreateSubmissionResponse,
      root.DocSpring.CreateTemplateData,
      root.DocSpring.Error,
      root.DocSpring.InvalidRequest,
      root.DocSpring.PendingTemplate,
      root.DocSpring.Submission,
      root.DocSpring.SubmissionBatch,
      root.DocSpring.SubmissionBatchData,
      root.DocSpring.SubmissionData,
      root.DocSpring.SubmissionDataRequest,
      root.DocSpring.Template,
      root.DocSpring.UpdateDataRequestResponse,
      root.DocSpring.UpdateSubmissionDataRequestData
    );
  }
})(this, function(
  PDFApi,
  ApiClient,
  AuthenticationError,
  AuthenticationSuccessResponse,
  CombinePdfsData,
  CombinedSubmission,
  CombinedSubmissionData,
  CreateCombinedSubmissionResponse,
  CreateCustomFileData,
  CreateCustomFileResponse,
  CreateSubmissionBatchResponse,
  CreateSubmissionDataRequestTokenResponse,
  CreateSubmissionResponse,
  CreateTemplateData,
  Error,
  InvalidRequest,
  PendingTemplate,
  Submission,
  SubmissionBatch,
  SubmissionBatchData,
  SubmissionData,
  SubmissionDataRequest,
  Template,
  UpdateDataRequestResponse,
  UpdateSubmissionDataRequestData
) {
  "use strict";

  /**
   * PDF service.
   * @module api/Client
   * @version 1.0.0
   */

  // Object.create polyfill for very old browsers
  if (typeof Object.create !== "function") {
    Object.create = function(proto, propertiesObject) {
      if (typeof proto !== "object" && typeof proto !== "function") {
        throw new TypeError("Object prototype may only be an Object: " + proto);
      } else if (proto === null) {
        throw new Error(
          "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
        );
      }

      if (typeof propertiesObject != "undefined") {
        throw new Error(
          "This browser's implementation of Object.create is a shim and doesn't support a second argument."
        );
      }

      function F() {}
      F.prototype = proto;

      return new F();
    };
  }

  // Object.assign polyfill
  if (typeof Object.assign != "function") {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        // .length of function is 2
        "use strict";
        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  /**
   * Constructs a new Client.
   * @alias module:api/Client
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  function Client(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    PDFApi.call(this, this.apiClient);
    var self = this;

    var waitForPDFJob = function(options, startJob, updateRecord, callback) {
      var timeout = options.timeout != null ? options.timeout : 60;
      var wait = options.wait == null ? true : !!options.wait;

      startJob(function(record) {
        if (!wait || record.state != "pending") {
          callback(
            null,
            record,
            record.state == "pending" || record.state == "processed"
          );
          return;
        }
        var startTime = Math.floor(new Date() / 1000);

        var waitForPDF = function() {
          updateRecord(record, function(updatedRecord) {
            record = updatedRecord;
            if (record.state != "pending") {
              callback(null, record, record.state === "processed");
              return;
            }
            var currentTime = Math.floor(new Date() / 1000);
            if (currentTime - startTime > timeout) {
              callback(
                new Error(
                  "PDF job was not finished after " + timeout + " seconds!"
                ),
                record,
                false
              );
            }
            setTimeout(waitForPDF, 1000);
          });
        };
        setTimeout(waitForPDF, 1000);
      });
    };

    this.originalCombineSubmissions = this.combineSubmissions.bind(this);
    this.combineSubmissions = function(_options, callback) {
      // eslint-disable-next-line es5/no-es6-static-methods
      var options = Object.assign({}, _options);
      // Don't send timeout or wait options to the API - causes a schema validation error.
      delete options.timeout;
      delete options.wait;

      waitForPDFJob(
        _options,
        function(waitCallback) {
          self.originalCombineSubmissions(options, function(error, response) {
            if (error) {
              callback(error, response);
              return;
            }
            waitCallback(response.combined_submission);
          });
        },
        function(record, updateCallback) {
          self.getCombinedSubmission(record.id, function(
            error,
            combinedSubmission
          ) {
            if (error) {
              callback(error, combinedSubmission);
              return;
            }
            updateCallback(combinedSubmission);
          });
        },
        function(error, record, success) {
          if (error) {
            callback(error, record);
            return;
          }
          var response = CreateCombinedSubmissionResponse.constructFromObject({
            status: success ? "success" : "error",
            combined_submission: record
          });
          callback(error, response);
        }
      );
    };

    this.originalCombinePdfs = this.combinePdfs.bind(this);
    this.combinePdfs = function(_options, callback) {
      // eslint-disable-next-line es5/no-es6-static-methods
      var options = Object.assign({}, _options);
      // Don't send timeout or wait options to the API - causes a schema validation error.
      delete options.timeout;
      delete options.wait;

      waitForPDFJob(
        _options,
        function(waitCallback) {
          self.originalCombinePdfs(options, function(error, response) {
            if (error) {
              callback(error, response);
              return;
            }
            waitCallback(response.combined_submission);
          });
        },
        function(record, updateCallback) {
          self.getCombinedSubmission(record.id, function(
            error,
            combinedSubmission
          ) {
            if (error) {
              callback(error, combinedSubmission);
              return;
            }
            updateCallback(combinedSubmission);
          });
        },
        function(error, record, success) {
          if (error) {
            callback(error, record);
            return;
          }
          var response = CreateCombinedSubmissionResponse.constructFromObject({
            status: success ? "success" : "error",
            combined_submission: record
          });
          callback(error, response);
        }
      );
    };

    this.originalGeneratePDF = this.generatePDF.bind(this);
    this.generatePDF = function(templateId, _options, callback) {
      // eslint-disable-next-line es5/no-es6-static-methods
      var options = Object.assign({}, _options);
      // Don't send timeout or wait options to the API - causes a schema validation error.
      delete options.timeout;
      delete options.wait;

      waitForPDFJob(
        _options,
        function(waitCallback) {
          self.originalGeneratePDF(templateId, options, function(
            error,
            response
          ) {
            if (error) {
              callback(error, response);
              return;
            }
            waitCallback(response.submission);
          });
        },
        function(record, updateCallback) {
          self.getSubmission(record.id, {}, function(error, submission) {
            if (error) {
              callback(error, submission);
              return;
            }
            updateCallback(submission);
          });
        },
        function(error, record, success) {
          if (error) {
            callback(error, record);
            return;
          }
          var response = CreateSubmissionResponse.constructFromObject({
            status: success ? "success" : "error",
            submission: record
          });
          callback(error, response);
        }
      );
    };

    // this.batchGeneratePDF = function (templateId, createSubmissionData, callback) {
    // };
  }

  Client.prototype = Object.create(PDFApi.prototype);
  Client.prototype.constructor = Client;

  return Client;
});
