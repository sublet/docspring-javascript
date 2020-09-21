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
    root.DocSpring.SubmissionDataRequest = factory(root.DocSpring.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubmissionDataRequest model module.
   * @module model/SubmissionDataRequest
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>SubmissionDataRequest</code>.
   * @alias module:model/SubmissionDataRequest
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param email {String} 
   * @param order {Number} 
   * @param fields {Array.<String>} 
   * @param metadata {Object} 
   * @param state {module:model/SubmissionDataRequest.StateEnum} 
   */
  var exports = function(id, name, email, order, fields, metadata, state) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['email'] = email;
    _this['order'] = order;
    _this['fields'] = fields;
    _this['metadata'] = metadata;
    _this['state'] = state;












  };

  /**
   * Constructs a <code>SubmissionDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubmissionDataRequest} obj Optional instance to populate.
   * @return {module:model/SubmissionDataRequest} The populated <code>SubmissionDataRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('viewed_at')) {
        obj['viewed_at'] = ApiClient.convertToType(data['viewed_at'], 'String');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'String');
      }
      if (data.hasOwnProperty('auth_type')) {
        obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
      }
      if (data.hasOwnProperty('auth_second_factor_type')) {
        obj['auth_second_factor_type'] = ApiClient.convertToType(data['auth_second_factor_type'], 'String');
      }
      if (data.hasOwnProperty('auth_provider')) {
        obj['auth_provider'] = ApiClient.convertToType(data['auth_provider'], 'String');
      }
      if (data.hasOwnProperty('auth_session_started_at')) {
        obj['auth_session_started_at'] = ApiClient.convertToType(data['auth_session_started_at'], 'String');
      }
      if (data.hasOwnProperty('auth_session_id_hash')) {
        obj['auth_session_id_hash'] = ApiClient.convertToType(data['auth_session_id_hash'], 'String');
      }
      if (data.hasOwnProperty('auth_user_id_hash')) {
        obj['auth_user_id_hash'] = ApiClient.convertToType(data['auth_user_id_hash'], 'String');
      }
      if (data.hasOwnProperty('auth_username_hash')) {
        obj['auth_username_hash'] = ApiClient.convertToType(data['auth_username_hash'], 'String');
      }
      if (data.hasOwnProperty('auth_phone_number_hash')) {
        obj['auth_phone_number_hash'] = ApiClient.convertToType(data['auth_phone_number_hash'], 'String');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
      }
      if (data.hasOwnProperty('user_agent')) {
        obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * @member {Array.<String>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/SubmissionDataRequest.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} viewed_at
   */
  exports.prototype['viewed_at'] = undefined;
  /**
   * @member {String} completed_at
   */
  exports.prototype['completed_at'] = undefined;
  /**
   * @member {module:model/SubmissionDataRequest.AuthTypeEnum} auth_type
   */
  exports.prototype['auth_type'] = undefined;
  /**
   * @member {module:model/SubmissionDataRequest.AuthSecondFactorTypeEnum} auth_second_factor_type
   */
  exports.prototype['auth_second_factor_type'] = undefined;
  /**
   * @member {String} auth_provider
   */
  exports.prototype['auth_provider'] = undefined;
  /**
   * @member {String} auth_session_started_at
   */
  exports.prototype['auth_session_started_at'] = undefined;
  /**
   * @member {String} auth_session_id_hash
   */
  exports.prototype['auth_session_id_hash'] = undefined;
  /**
   * @member {String} auth_user_id_hash
   */
  exports.prototype['auth_user_id_hash'] = undefined;
  /**
   * @member {String} auth_username_hash
   */
  exports.prototype['auth_username_hash'] = undefined;
  /**
   * @member {String} auth_phone_number_hash
   */
  exports.prototype['auth_phone_number_hash'] = undefined;
  /**
   * @member {String} ip_address
   */
  exports.prototype['ip_address'] = undefined;
  /**
   * @member {String} user_agent
   */
  exports.prototype['user_agent'] = undefined;


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
     * value: "completed"
     * @const
     */
    "completed": "completed"  };

  /**
   * Allowed values for the <code>auth_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "password"
     * @const
     */
    "password": "password",
    /**
     * value: "oauth"
     * @const
     */
    "oauth": "oauth",
    /**
     * value: "email_link"
     * @const
     */
    "email_link": "email_link",
    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",
    /**
     * value: "ldap"
     * @const
     */
    "ldap": "ldap",
    /**
     * value: "saml"
     * @const
     */
    "saml": "saml"  };

  /**
   * Allowed values for the <code>auth_second_factor_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthSecondFactorTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",
    /**
     * value: "totp"
     * @const
     */
    "totp": "totp",
    /**
     * value: "mobile_push"
     * @const
     */
    "mobile_push": "mobile_push",
    /**
     * value: "security_key"
     * @const
     */
    "security_key": "security_key",
    /**
     * value: "fingerprint"
     * @const
     */
    "fingerprint": "fingerprint"  };


  return exports;
}));


