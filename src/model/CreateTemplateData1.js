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
    define(['../ApiClient', '../model/TemplatesdesccachedUploadTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplatesdesccachedUploadTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.DocSpring) {
      root.DocSpring = {};
    }
    root.DocSpring.CreateTemplateData1 = factory(root.DocSpring.ApiClient, root.DocSpring.TemplatesdesccachedUploadTemplate);
  }
}(this, function(ApiClient, TemplatesdesccachedUploadTemplate) {
  'use strict';




  /**
   * The CreateTemplateData1 model module.
   * @module model/CreateTemplateData1
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateTemplateData1</code>.
   * @alias module:model/CreateTemplateData1
   * @class
   * @param template {module:model/TemplatesdesccachedUploadTemplate} 
   */
  var exports = function(template) {
    var _this = this;

    _this['template'] = template;
  };

  /**
   * Constructs a <code>CreateTemplateData1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTemplateData1} obj Optional instance to populate.
   * @return {module:model/CreateTemplateData1} The populated <code>CreateTemplateData1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('template')) {
        obj['template'] = TemplatesdesccachedUploadTemplate.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TemplatesdesccachedUploadTemplate} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));

