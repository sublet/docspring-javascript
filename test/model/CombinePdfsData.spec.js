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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocSpring);
  }
}(this, function(expect, DocSpring) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocSpring.CombinePdfsData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CombinePdfsData', function() {
    it('should create an instance of CombinePdfsData', function() {
      // uncomment below and update the code to test CombinePdfsData
      //var instance = new DocSpring.CombinePdfsData();
      //expect(instance).to.be.a(DocSpring.CombinePdfsData);
    });

    it('should have the property test (base name: "test")', function() {
      // uncomment below and update the code to test the property test
      //var instance = new DocSpring.CombinePdfsData();
      //expect(instance).to.be();
    });

    it('should have the property sourcePdfs (base name: "source_pdfs")', function() {
      // uncomment below and update the code to test the property sourcePdfs
      //var instance = new DocSpring.CombinePdfsData();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new DocSpring.CombinePdfsData();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instance = new DocSpring.CombinePdfsData();
      //expect(instance).to.be();
    });

    it('should have the property deleteCustomFiles (base name: "delete_custom_files")', function() {
      // uncomment below and update the code to test the property deleteCustomFiles
      //var instance = new DocSpring.CombinePdfsData();
      //expect(instance).to.be();
    });

  });

}));
