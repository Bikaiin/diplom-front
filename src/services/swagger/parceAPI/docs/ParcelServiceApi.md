# Serviceserviceproto.ParcelServiceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**parcelServiceCreateParcelSize**](ParcelServiceApi.md#parcelServiceCreateParcelSize) | **POST** /create_parcel | 
[**parcelServiceGetParcelAudit**](ParcelServiceApi.md#parcelServiceGetParcelAudit) | **GET** /get_parcel_audit | 
[**parcelServiceGetParcels**](ParcelServiceApi.md#parcelServiceGetParcels) | **GET** /get_parcels | 
[**parcelServiceSaveParcelSize**](ParcelServiceApi.md#parcelServiceSaveParcelSize) | **POST** /save_parcel_size | 
[**parcelServiceUpdateParcel**](ParcelServiceApi.md#parcelServiceUpdateParcel) | **POST** /update_parcel | 


<a name="parcelServiceCreateParcelSize"></a>
# **parcelServiceCreateParcelSize**
> ParcelApiCreateParcelResponce parcelServiceCreateParcelSize(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.ParcelServiceApi();

var body = new Serviceserviceproto.ParcelApiCreateParcelRequest(); // ParcelApiCreateParcelRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parcelServiceCreateParcelSize(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelApiCreateParcelRequest**](ParcelApiCreateParcelRequest.md)|  | 

### Return type

[**ParcelApiCreateParcelResponce**](ParcelApiCreateParcelResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parcelServiceGetParcelAudit"></a>
# **parcelServiceGetParcelAudit**
> ParcelApiGetParcelAuditResponce parcelServiceGetParcelAudit(opts)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.ParcelServiceApi();

var opts = { 
  'id': "id_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parcelServiceGetParcelAudit(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 

### Return type

[**ParcelApiGetParcelAuditResponce**](ParcelApiGetParcelAuditResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parcelServiceGetParcels"></a>
# **parcelServiceGetParcels**
> ParcelApiGetParcelResponce parcelServiceGetParcels()



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.ParcelServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parcelServiceGetParcels(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ParcelApiGetParcelResponce**](ParcelApiGetParcelResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parcelServiceSaveParcelSize"></a>
# **parcelServiceSaveParcelSize**
> ParcelApiSaveParcelSizeResponce parcelServiceSaveParcelSize(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.ParcelServiceApi();

var body = new Serviceserviceproto.ParcelApiSaveParcelSizeRequest(); // ParcelApiSaveParcelSizeRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parcelServiceSaveParcelSize(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelApiSaveParcelSizeRequest**](ParcelApiSaveParcelSizeRequest.md)|  | 

### Return type

[**ParcelApiSaveParcelSizeResponce**](ParcelApiSaveParcelSizeResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parcelServiceUpdateParcel"></a>
# **parcelServiceUpdateParcel**
> ParcelApiUpdateParcelResponce parcelServiceUpdateParcel(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.ParcelServiceApi();

var body = new Serviceserviceproto.ParcelApiUpdateParcelRequest(); // ParcelApiUpdateParcelRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parcelServiceUpdateParcel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelApiUpdateParcelRequest**](ParcelApiUpdateParcelRequest.md)|  | 

### Return type

[**ParcelApiUpdateParcelResponce**](ParcelApiUpdateParcelResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

