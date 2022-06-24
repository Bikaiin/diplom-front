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
    define(['ApiClient', 'model/ParcelApiSizes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ParcelApiSizes'));
  } else {
    // Browser globals (root is window)
    if (!root.Serviceserviceproto) {
      root.Serviceserviceproto = {};
    }
    root.Serviceserviceproto.ParcelApiCreateParcelRequest = factory(root.Serviceserviceproto.ApiClient, root.Serviceserviceproto.ParcelApiSizes);
  }
}(this, function(ApiClient, ParcelApiSizes) {
  'use strict';

  /**
   * The ParcelApiCreateParcelRequest model module.
   * @module model/ParcelApiCreateParcelRequest
   * @version version not set
   */

  /**
   * Constructs a new <code>ParcelApiCreateParcelRequest</code>.
   * @alias module:model/ParcelApiCreateParcelRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ParcelApiCreateParcelRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelApiCreateParcelRequest} obj Optional instance to populate.
   * @return {module:model/ParcelApiCreateParcelRequest} The populated <code>ParcelApiCreateParcelRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('size'))
        obj.size = ParcelApiSizes.constructFromObject(data['size']);
      if (data.hasOwnProperty('barcode'))
        obj.barcode = ApiClient.convertToType(data['barcode'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ParcelApiSizes} size
   */
  exports.prototype.size = undefined;

  /**
   * @member {String} barcode
   */
  exports.prototype.barcode = undefined;


  return exports;

}));