# Serviceserviceproto.AuthServiceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authServiceAuth**](AuthServiceApi.md#authServiceAuth) | **POST** /v1/auth | 
[**authServiceCheck**](AuthServiceApi.md#authServiceCheck) | **GET** /v1/check | 
[**authServiceCreate**](AuthServiceApi.md#authServiceCreate) | **POST** /v1/create | 
[**authServiceGetRoles**](AuthServiceApi.md#authServiceGetRoles) | **GET** /v1/get_roles | 
[**authServiceGetUsers**](AuthServiceApi.md#authServiceGetUsers) | **GET** /v1/get_users | 
[**authServiceRefresh**](AuthServiceApi.md#authServiceRefresh) | **POST** /v1/refresh | 
[**authServiceUpdateUser**](AuthServiceApi.md#authServiceUpdateUser) | **POST** /v1/update_user | 


<a name="authServiceAuth"></a>
# **authServiceAuth**
> AuthApiAuthResponce authServiceAuth(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var body = new Serviceserviceproto.AuthApiAuthRequest(); // AuthApiAuthRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceAuth(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthApiAuthRequest**](AuthApiAuthRequest.md)|  | 

### Return type

[**AuthApiAuthResponce**](AuthApiAuthResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authServiceCheck"></a>
# **authServiceCheck**
> AuthApiCheckResponce authServiceCheck(opts)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var opts = { 
  'token': "token_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceCheck(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 

### Return type

[**AuthApiCheckResponce**](AuthApiCheckResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authServiceCreate"></a>
# **authServiceCreate**
> AuthApiCreateResponce authServiceCreate(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var body = new Serviceserviceproto.AuthApiCreateRequest(); // AuthApiCreateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthApiCreateRequest**](AuthApiCreateRequest.md)|  | 

### Return type

[**AuthApiCreateResponce**](AuthApiCreateResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authServiceGetRoles"></a>
# **authServiceGetRoles**
> AuthApiGetRolesResponce authServiceGetRoles()



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceGetRoles(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthApiGetRolesResponce**](AuthApiGetRolesResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authServiceGetUsers"></a>
# **authServiceGetUsers**
> AuthApiGetUsersResponce authServiceGetUsers()



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceGetUsers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthApiGetUsersResponce**](AuthApiGetUsersResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authServiceRefresh"></a>
# **authServiceRefresh**
> AuthApiAuthResponce authServiceRefresh(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var body = new Serviceserviceproto.AuthApiRefreshRequest(); // AuthApiRefreshRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceRefresh(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthApiRefreshRequest**](AuthApiRefreshRequest.md)|  | 

### Return type

[**AuthApiAuthResponce**](AuthApiAuthResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authServiceUpdateUser"></a>
# **authServiceUpdateUser**
> AuthApiUpdateUserResponce authServiceUpdateUser(body)



### Example
```javascript
var Serviceserviceproto = require('serviceserviceproto');

var apiInstance = new Serviceserviceproto.AuthServiceApi();

var body = new Serviceserviceproto.AuthApiUpdateUserRequest(); // AuthApiUpdateUserRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authServiceUpdateUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthApiUpdateUserRequest**](AuthApiUpdateUserRequest.md)|  | 

### Return type

[**AuthApiUpdateUserResponce**](AuthApiUpdateUserResponce.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

