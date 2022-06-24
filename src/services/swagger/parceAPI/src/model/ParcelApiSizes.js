/*
 * service/service.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Serviceserviceproto) {
      root.Serviceserviceproto = {};
    }
    root.Serviceserviceproto.ParcelApiSizes = factory(root.Serviceserviceproto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParcelApiSizes model module.
   * @module model/ParcelApiSizes
   * @version version not set
   */

  /**
   * Constructs a new <code>ParcelApiSizes</code>.
   * @alias module:model/ParcelApiSizes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ParcelApiSizes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelApiSizes} obj Optional instance to populate.
   * @return {module:model/ParcelApiSizes} The populated <code>ParcelApiSizes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
      if (data.hasOwnProperty('length'))
        obj.length = ApiClient.convertToType(data['length'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {Number} width
   */
  exports.prototype.width = undefined;

  /**
   * @member {Number} length
   */
  exports.prototype.length = undefined;


  return exports;

}));