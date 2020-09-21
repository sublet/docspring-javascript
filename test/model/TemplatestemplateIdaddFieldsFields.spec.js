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
    instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
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

  describe('TemplatestemplateIdaddFieldsFields', function() {
    it('should create an instance of TemplatestemplateIdaddFieldsFields', function() {
      // uncomment below and update the code to test TemplatestemplateIdaddFieldsFields
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be.a(DocSpring.TemplatestemplateIdaddFieldsFields);
    });

    it('should have the property uppercase (base name: "uppercase")', function() {
      // uncomment below and update the code to test the property uppercase
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColorFieldName (base name: "backgroundColorFieldName")', function() {
      // uncomment below and update the code to test the property backgroundColorFieldName
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property barcodeSymbology (base name: "barcodeSymbology")', function() {
      // uncomment below and update the code to test the property barcodeSymbology
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property minLength (base name: "minLength")', function() {
      // uncomment below and update the code to test the property minLength
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property integer (base name: "integer")', function() {
      // uncomment below and update the code to test the property integer
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property combValueOffset (base name: "combValueOffset")', function() {
      // uncomment below and update the code to test the property combValueOffset
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property imageGravity (base name: "imageGravity")', function() {
      // uncomment below and update the code to test the property imageGravity
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property overflow (base name: "overflow")', function() {
      // uncomment below and update the code to test the property overflow
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property qrcodeColor (base name: "qrcodeColor")', function() {
      // uncomment below and update the code to test the property qrcodeColor
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property colorFieldRequired (base name: "colorFieldRequired")', function() {
      // uncomment below and update the code to test the property colorFieldRequired
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColorFieldRequired (base name: "backgroundColorFieldRequired")', function() {
      // uncomment below and update the code to test the property backgroundColorFieldRequired
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property imageScaleType (base name: "imageScaleType")', function() {
      // uncomment below and update the code to test the property imageScaleType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property exclusiveMinimum (base name: "exclusiveMinimum")', function() {
      // uncomment below and update the code to test the property exclusiveMinimum
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property numberConditionRangeExclusiveMax (base name: "numberConditionRangeExclusiveMax")', function() {
      // uncomment below and update the code to test the property numberConditionRangeExclusiveMax
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property invertBooleanCondition (base name: "invertBooleanCondition")', function() {
      // uncomment below and update the code to test the property invertBooleanCondition
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property _static (base name: "static")', function() {
      // uncomment below and update the code to test the property _static
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeFillColorFieldName (base name: "shapeFillColorFieldName")', function() {
      // uncomment below and update the code to test the property shapeFillColorFieldName
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeBorderColorFieldName (base name: "shapeBorderColorFieldName")', function() {
      // uncomment below and update the code to test the property shapeBorderColorFieldName
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property vAlignment (base name: "vAlignment")', function() {
      // uncomment below and update the code to test the property vAlignment
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property bold (base name: "bold")', function() {
      // uncomment below and update the code to test the property bold
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeBorderWidth (base name: "shapeBorderWidth")', function() {
      // uncomment below and update the code to test the property shapeBorderWidth
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property combNumberOfCells (base name: "combNumberOfCells")', function() {
      // uncomment below and update the code to test the property combNumberOfCells
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeBorderColor (base name: "shapeBorderColor")', function() {
      // uncomment below and update the code to test the property shapeBorderColor
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property typeface (base name: "typeface")', function() {
      // uncomment below and update the code to test the property typeface
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property comb (base name: "comb")', function() {
      // uncomment below and update the code to test the property comb
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeType (base name: "shapeType")', function() {
      // uncomment below and update the code to test the property shapeType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property displayType (base name: "displayType")', function() {
      // uncomment below and update the code to test the property displayType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property checkColor (base name: "checkColor")', function() {
      // uncomment below and update the code to test the property checkColor
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property multilineLines (base name: "multilineLines")', function() {
      // uncomment below and update the code to test the property multilineLines
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property multiline (base name: "multiline")', function() {
      // uncomment below and update the code to test the property multiline
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property trueText (base name: "trueText")', function() {
      // uncomment below and update the code to test the property trueText
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property fontSize (base name: "fontSize")', function() {
      // uncomment below and update the code to test the property fontSize
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property alignment (base name: "alignment")', function() {
      // uncomment below and update the code to test the property alignment
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property maxLength (base name: "maxLength")', function() {
      // uncomment below and update the code to test the property maxLength
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property autoCalculateMaxLength (base name: "autoCalculateMaxLength")', function() {
      // uncomment below and update the code to test the property autoCalculateMaxLength
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property colorFieldName (base name: "colorFieldName")', function() {
      // uncomment below and update the code to test the property colorFieldName
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property qrcodeColorFieldName (base name: "qrcodeColorFieldName")', function() {
      // uncomment below and update the code to test the property qrcodeColorFieldName
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property numberConditionRangeMin (base name: "numberConditionRangeMin")', function() {
      // uncomment below and update the code to test the property numberConditionRangeMin
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property checkColorFieldRequired (base name: "checkColorFieldRequired")', function() {
      // uncomment below and update the code to test the property checkColorFieldRequired
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property combinedFieldFormat (base name: "combinedFieldFormat")', function() {
      // uncomment below and update the code to test the property combinedFieldFormat
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeBorderColorFieldRequired (base name: "shapeBorderColorFieldRequired")', function() {
      // uncomment below and update the code to test the property shapeBorderColorFieldRequired
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property combinedFieldNames (base name: "combinedFieldNames")', function() {
      // uncomment below and update the code to test the property combinedFieldNames
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property numberConditionRangeExclusiveMin (base name: "numberConditionRangeExclusiveMin")', function() {
      // uncomment below and update the code to test the property numberConditionRangeExclusiveMin
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property combinedFieldSeparator (base name: "combinedFieldSeparator")', function() {
      // uncomment below and update the code to test the property combinedFieldSeparator
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property exclusiveMaximum (base name: "exclusiveMaximum")', function() {
      // uncomment below and update the code to test the property exclusiveMaximum
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property combinedFieldType (base name: "combinedFieldType")', function() {
      // uncomment below and update the code to test the property combinedFieldType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeFormat (base name: "dateTimeFormat")', function() {
      // uncomment below and update the code to test the property dateTimeFormat
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property qrcodeColorFieldRequired (base name: "qrcodeColorFieldRequired")', function() {
      // uncomment below and update the code to test the property qrcodeColorFieldRequired
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property strikethrough (base name: "strikethrough")', function() {
      // uncomment below and update the code to test the property strikethrough
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property falseText (base name: "falseText")', function() {
      // uncomment below and update the code to test the property falseText
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property characterSpacing (base name: "characterSpacing")', function() {
      // uncomment below and update the code to test the property characterSpacing
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property numberConditionRangeMax (base name: "numberConditionRangeMax")', function() {
      // uncomment below and update the code to test the property numberConditionRangeMax
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColor (base name: "backgroundColor")', function() {
      // uncomment below and update the code to test the property backgroundColor
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property checkColorFieldName (base name: "checkColorFieldName")', function() {
      // uncomment below and update the code to test the property checkColorFieldName
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property checkCharacter (base name: "checkCharacter")', function() {
      // uncomment below and update the code to test the property checkCharacter
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property rotation (base name: "rotation")', function() {
      // uncomment below and update the code to test the property rotation
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property optionList (base name: "optionList")', function() {
      // uncomment below and update the code to test the property optionList
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeFillColor (base name: "shapeFillColor")', function() {
      // uncomment below and update the code to test the property shapeFillColor
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property stringConditionType (base name: "stringConditionType")', function() {
      // uncomment below and update the code to test the property stringConditionType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property shapeFillColorFieldRequired (base name: "shapeFillColorFieldRequired")', function() {
      // uncomment below and update the code to test the property shapeFillColorFieldRequired
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property includeTime (base name: "includeTime")', function() {
      // uncomment below and update the code to test the property includeTime
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property decimalPlaces (base name: "decimalPlaces")', function() {
      // uncomment below and update the code to test the property decimalPlaces
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property maximum (base name: "maximum")', function() {
      // uncomment below and update the code to test the property maximum
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property signatureAllowDraw (base name: "signatureAllowDraw")', function() {
      // uncomment below and update the code to test the property signatureAllowDraw
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property opacity (base name: "opacity")', function() {
      // uncomment below and update the code to test the property opacity
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property numberConditionType (base name: "numberConditionType")', function() {
      // uncomment below and update the code to test the property numberConditionType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property minimum (base name: "minimum")', function() {
      // uncomment below and update the code to test the property minimum
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

    it('should have the property signatureAllowType (base name: "signatureAllowType")', function() {
      // uncomment below and update the code to test the property signatureAllowType
      //var instance = new DocSpring.TemplatestemplateIdaddFieldsFields();
      //expect(instance).to.be();
    });

  });

}));
