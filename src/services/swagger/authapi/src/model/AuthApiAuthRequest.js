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
    root.Serviceserviceproto.AuthApiAuthRequest = factory(root.Serviceserviceproto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AuthApiAuthRequest model module.
   * @module model/AuthApiAuthRequest
   * @version version not set
   */

  /**
   * Constructs a new <code>AuthApiAuthRequest</code>.
   * @alias module:model/AuthApiAuthRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AuthApiAuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthApiAuthRequest} obj Optional instance to populate.
   * @return {module:model/AuthApiAuthRequest} The populated <code>AuthApiAuthRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('login'))
        obj.login = ApiClient.convertToType(data['login'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} login
   */
  exports.prototype.login = undefined;

  /**
   * @member {String} password
   */
  exports.prototype.password = undefined;


  return exports;

}));
