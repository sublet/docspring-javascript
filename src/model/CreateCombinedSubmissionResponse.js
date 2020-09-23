/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
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
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CombinedSubmission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CombinedSubmission'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.CreateCombinedSubmissionResponse = factory(root.DocSpring.ApiClient, root.DocSpring.CombinedSubmission);
  }
}(this, function(ApiClient, CombinedSubmission) {
  'use strict';




  /**
   * The CreateCombinedSubmissionResponse model module.
   * @module model/CreateCombinedSubmissionResponse
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>CreateCombinedSubmissionResponse</code>.
   * @alias module:model/CreateCombinedSubmissionResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateCombinedSubmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCombinedSubmissionResponse} obj Optional instance to populate.
   * @return {module:model/CreateCombinedSubmissionResponse} The populated <code>CreateCombinedSubmissionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('combined_submission')) {
        obj['combined_submission'] = CombinedSubmission.constructFromObject(data['combined_submission']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CombinedSubmission} combined_submission
   */
  exports.prototype['combined_submission'] = undefined;
  /**
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {module:model/CreateCombinedSubmissionResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


