/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0
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
    root.DocSpring.HtmlTemplateData = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlTemplateData model module.
   * @module model/HtmlTemplateData
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>HtmlTemplateData</code>.
   * @alias module:model/HtmlTemplateData
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>HtmlTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlTemplateData} obj Optional instance to populate.
   * @return {module:model/HtmlTemplateData} The populated <code>HtmlTemplateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expiration_interval')) {
        obj['expiration_interval'] = ApiClient.convertToType(data['expiration_interval'], 'String');
      }
      if (data.hasOwnProperty('webhook_url')) {
        obj['webhook_url'] = ApiClient.convertToType(data['webhook_url'], 'String');
      }
      if (data.hasOwnProperty('scss')) {
        obj['scss'] = ApiClient.convertToType(data['scss'], 'String');
      }
      if (data.hasOwnProperty('allow_additional_properties')) {
        obj['allow_additional_properties'] = ApiClient.convertToType(data['allow_additional_properties'], 'Boolean');
      }
      if (data.hasOwnProperty('expire_after')) {
        obj['expire_after'] = ApiClient.convertToType(data['expire_after'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('public_submissions')) {
        obj['public_submissions'] = ApiClient.convertToType(data['public_submissions'], 'Boolean');
      }
      if (data.hasOwnProperty('slack_webhook_url')) {
        obj['slack_webhook_url'] = ApiClient.convertToType(data['slack_webhook_url'], 'String');
      }
      if (data.hasOwnProperty('embed_domains')) {
        obj['embed_domains'] = ApiClient.convertToType(data['embed_domains'], 'String');
      }
      if (data.hasOwnProperty('header_html')) {
        obj['header_html'] = ApiClient.convertToType(data['header_html'], 'String');
      }
      if (data.hasOwnProperty('public_web_form')) {
        obj['public_web_form'] = ApiClient.convertToType(data['public_web_form'], 'Boolean');
      }
      if (data.hasOwnProperty('editable_submissions')) {
        obj['editable_submissions'] = ApiClient.convertToType(data['editable_submissions'], 'Boolean');
      }
      if (data.hasOwnProperty('expire_submissions')) {
        obj['expire_submissions'] = ApiClient.convertToType(data['expire_submissions'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('footer_html')) {
        obj['footer_html'] = ApiClient.convertToType(data['footer_html'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('template_type')) {
        obj['template_type'] = ApiClient.convertToType(data['template_type'], 'String');
      }
      if (data.hasOwnProperty('redirect_url')) {
        obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/HtmlTemplateData.ExpirationIntervalEnum} expiration_interval
   */
  exports.prototype['expiration_interval'] = undefined;
  /**
   * @member {String} webhook_url
   */
  exports.prototype['webhook_url'] = undefined;
  /**
   * @member {String} scss
   */
  exports.prototype['scss'] = undefined;
  /**
   * @member {Boolean} allow_additional_properties
   */
  exports.prototype['allow_additional_properties'] = undefined;
  /**
   * @member {Number} expire_after
   */
  exports.prototype['expire_after'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} public_submissions
   */
  exports.prototype['public_submissions'] = undefined;
  /**
   * @member {String} slack_webhook_url
   */
  exports.prototype['slack_webhook_url'] = undefined;
  /**
   * @member {String} embed_domains
   */
  exports.prototype['embed_domains'] = undefined;
  /**
   * @member {String} header_html
   */
  exports.prototype['header_html'] = undefined;
  /**
   * @member {Boolean} public_web_form
   */
  exports.prototype['public_web_form'] = undefined;
  /**
   * @member {Boolean} editable_submissions
   */
  exports.prototype['editable_submissions'] = undefined;
  /**
   * @member {Boolean} expire_submissions
   */
  exports.prototype['expire_submissions'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} footer_html
   */
  exports.prototype['footer_html'] = undefined;
  /**
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * @member {module:model/HtmlTemplateData.TemplateTypeEnum} template_type
   */
  exports.prototype['template_type'] = undefined;
  /**
   * @member {String} redirect_url
   */
  exports.prototype['redirect_url'] = undefined;


  /**
   * Allowed values for the <code>expiration_interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExpirationIntervalEnum = {
    /**
     * value: "minutes"
     * @const
     */
    "minutes": "minutes",
    /**
     * value: "hours"
     * @const
     */
    "hours": "hours",
    /**
     * value: "days"
     * @const
     */
    "days": "days"  };

  /**
   * Allowed values for the <code>template_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TemplateTypeEnum = {
    /**
     * value: "pdf"
     * @const
     */
    "pdf": "pdf",
    /**
     * value: "html"
     * @const
     */
    "html": "html"  };


  return exports;
}));


