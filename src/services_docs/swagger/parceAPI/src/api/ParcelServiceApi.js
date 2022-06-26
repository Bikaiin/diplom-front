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
    define(['ApiClient', 'model/ParcelApiCreateParcelRequest', 'model/ParcelApiCreateParcelResponce', 'model/ParcelApiGetParcelAuditResponce', 'model/ParcelApiGetParcelResponce', 'model/ParcelApiSaveParcelSizeRequest', 'model/ParcelApiSaveParcelSizeResponce', 'model/ParcelApiUpdateParcelRequest', 'model/ParcelApiUpdateParcelResponce', 'model/RpcStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParcelApiCreateParcelRequest'), require('../model/ParcelApiCreateParcelResponce'), require('../model/ParcelApiGetParcelAuditResponce'), require('../model/ParcelApiGetParcelResponce'), require('../model/ParcelApiSaveParcelSizeRequest'), require('../model/ParcelApiSaveParcelSizeResponce'), require('../model/ParcelApiUpdateParcelRequest'), require('../model/ParcelApiUpdateParcelResponce'), require('../model/RpcStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Serviceserviceproto) {
      root.Serviceserviceproto = {};
    }
    root.Serviceserviceproto.ParcelServiceApi = factory(root.Serviceserviceproto.ApiClient, root.Serviceserviceproto.ParcelApiCreateParcelRequest, root.Serviceserviceproto.ParcelApiCreateParcelResponce, root.Serviceserviceproto.ParcelApiGetParcelAuditResponce, root.Serviceserviceproto.ParcelApiGetParcelResponce, root.Serviceserviceproto.ParcelApiSaveParcelSizeRequest, root.Serviceserviceproto.ParcelApiSaveParcelSizeResponce, root.Serviceserviceproto.ParcelApiUpdateParcelRequest, root.Serviceserviceproto.ParcelApiUpdateParcelResponce, root.Serviceserviceproto.RpcStatus);
  }
}(this, function(ApiClient, ParcelApiCreateParcelRequest, ParcelApiCreateParcelResponce, ParcelApiGetParcelAuditResponce, ParcelApiGetParcelResponce, ParcelApiSaveParcelSizeRequest, ParcelApiSaveParcelSizeResponce, ParcelApiUpdateParcelRequest, ParcelApiUpdateParcelResponce, RpcStatus) {
  'use strict';

  /**
   * ParcelService service.
   * @module api/ParcelServiceApi
   * @version version not set
   */

  /**
   * Constructs a new ParcelServiceApi. 
   * @alias module:api/ParcelServiceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the parcelServiceCreateParcelSize operation.
     * @callback module:api/ParcelServiceApi~parcelServiceCreateParcelSizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelApiCreateParcelResponce} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ParcelApiCreateParcelRequest} body 
     * @param {module:api/ParcelServiceApi~parcelServiceCreateParcelSizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelApiCreateParcelResponce}
     */
    this.parcelServiceCreateParcelSize = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling parcelServiceCreateParcelSize");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParcelApiCreateParcelResponce;

      return this.apiClient.callApi(
        '/create_parcel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parcelServiceGetParcelAudit operation.
     * @callback module:api/ParcelServiceApi~parcelServiceGetParcelAuditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelApiGetParcelAuditResponce} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {module:api/ParcelServiceApi~parcelServiceGetParcelAuditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelApiGetParcelAuditResponce}
     */
    this.parcelServiceGetParcelAudit = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParcelApiGetParcelAuditResponce;

      return this.apiClient.callApi(
        '/get_parcel_audit', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parcelServiceGetParcels operation.
     * @callback module:api/ParcelServiceApi~parcelServiceGetParcelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelApiGetParcelResponce} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ParcelServiceApi~parcelServiceGetParcelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelApiGetParcelResponce}
     */
    this.parcelServiceGetParcels = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParcelApiGetParcelResponce;

      return this.apiClient.callApi(
        '/get_parcels', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parcelServiceSaveParcelSize operation.
     * @callback module:api/ParcelServiceApi~parcelServiceSaveParcelSizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelApiSaveParcelSizeResponce} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ParcelApiSaveParcelSizeRequest} body 
     * @param {module:api/ParcelServiceApi~parcelServiceSaveParcelSizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelApiSaveParcelSizeResponce}
     */
    this.parcelServiceSaveParcelSize = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling parcelServiceSaveParcelSize");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParcelApiSaveParcelSizeResponce;

      return this.apiClient.callApi(
        '/save_parcel_size', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parcelServiceUpdateParcel operation.
     * @callback module:api/ParcelServiceApi~parcelServiceUpdateParcelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelApiUpdateParcelResponce} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ParcelApiUpdateParcelRequest} body 
     * @param {module:api/ParcelServiceApi~parcelServiceUpdateParcelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParcelApiUpdateParcelResponce}
     */
    this.parcelServiceUpdateParcel = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling parcelServiceUpdateParcel");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParcelApiUpdateParcelResponce;

      return this.apiClient.callApi(
        '/update_parcel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));