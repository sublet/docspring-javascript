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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.MoveTemplateData = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MoveTemplateData model module.
   * @module model/MoveTemplateData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MoveTemplateData</code>.
   * @alias module:model/MoveTemplateData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MoveTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveTemplateData} obj Optional instance to populate.
   * @return {module:model/MoveTemplateData} The populated <code>MoveTemplateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parent_folder_id')) {
        obj['parent_folder_id'] = ApiClient.convertToType(data['parent_folder_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} parent_folder_id
   */
  exports.prototype['parent_folder_id'] = undefined;



  return exports;
}));

