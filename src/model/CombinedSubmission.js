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
    define(['../ApiClient', '../model/CombinedSubmissionAction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CombinedSubmissionAction'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.CombinedSubmission = factory(root.DocSpring.ApiClient, root.DocSpring.CombinedSubmissionAction);
  }
}(this, function(ApiClient, CombinedSubmissionAction) {
  'use strict';




  /**
   * The CombinedSubmission model module.
   * @module model/CombinedSubmission
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>CombinedSubmission</code>.
   * @alias module:model/CombinedSubmission
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CombinedSubmission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinedSubmission} obj Optional instance to populate.
   * @return {module:model/CombinedSubmission} The populated <code>CombinedSubmission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('expired')) {
        obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
      }
      if (data.hasOwnProperty('expires_at')) {
        obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
      }
      if (data.hasOwnProperty('source_pdfs')) {
        obj['source_pdfs'] = ApiClient.convertToType(data['source_pdfs'], [Object]);
      }
      if (data.hasOwnProperty('pdf_hash')) {
        obj['pdf_hash'] = ApiClient.convertToType(data['pdf_hash'], 'String');
      }
      if (data.hasOwnProperty('download_url')) {
        obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
      }
      if (data.hasOwnProperty('submission_ids')) {
        obj['submission_ids'] = ApiClient.convertToType(data['submission_ids'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [CombinedSubmissionAction]);
      }
    }
    return obj;
  }

  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Boolean} expired
   */
  exports.prototype['expired'] = undefined;
  /**
   * @member {String} expires_at
   */
  exports.prototype['expires_at'] = undefined;
  /**
   * @member {Array.<Object>} source_pdfs
   */
  exports.prototype['source_pdfs'] = undefined;
  /**
   * @member {String} pdf_hash
   */
  exports.prototype['pdf_hash'] = undefined;
  /**
   * @member {String} download_url
   */
  exports.prototype['download_url'] = undefined;
  /**
   * @member {Array.<String>} submission_ids
   */
  exports.prototype['submission_ids'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CombinedSubmission.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Array.<module:model/CombinedSubmissionAction>} actions
   */
  exports.prototype['actions'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "processed"
     * @const
     */
    "processed": "processed",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


