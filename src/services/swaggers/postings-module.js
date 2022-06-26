/* eslint-disable */
import qs from 'qs'
import axios from 'axios'
let postings = {}
postings._domain = ''
postings._getDomain = () => {
  return postings._domain
}
postings._setDomain = ($domain) => {
  postings._domain = $domain
}
postings._request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  if (keys.length > 0) {
    url = url + '?' + qs.stringify(queryParameters)
  }
  switch (method) {
    case 'get':
      return axios.get(url, config)
    case 'head':
      return axios.head(url, config)
    case 'delete':
      return axios.delete(url, config)
    case 'post':
      return axios.post(url, body, config)
    case 'put':
      return axios.put(url, body, config)
    case 'patch':
      return axios.patch(url, body, config)
  }
}
/************************************************************
 *
 ************************************************************/
/**
 *
 * request: ParcelService_CreateParcelSize
 * url: ParcelService_CreateParcelSizeURL
 * method: ParcelService_CreateParcelSize_TYPE
 * raw_url: ParcelService_CreateParcelSize_RAW_URL
 * @param body - body
 */
postings.ParcelService_CreateParcelSize = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let config = parameters.$config || {}
  let path = '/create_parcel'
  let body
  let queryParameters = {}
  let headers = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  config.headers = {
    ...config.heaers,
    ...headers
  }
  return postings._request('post', domain + path, body, queryParameters, form, config)
}
postings.ParcelService_CreateParcelSize_RAW_URL = () => {
  return '/create_parcel'
}
postings.ParcelService_CreateParcelSize_TYPE = () => {
  return 'post'
}
postings.ParcelService_CreateParcelSizeURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let path = '/create_parcel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *
 * request: ParcelService_GetParcelAudit
 * url: ParcelService_GetParcelAuditURL
 * method: ParcelService_GetParcelAudit_TYPE
 * raw_url: ParcelService_GetParcelAudit_RAW_URL
 * @param id - id
 */
postings.ParcelService_GetParcelAudit = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let config = parameters.$config || {}
  let path = '/get_parcel_audit'
  let body
  let queryParameters = {}
  let headers = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  config.headers = {
    ...config.heaers,
    ...headers
  }
  return postings._request('get', domain + path, body, queryParameters, form, config)
}
postings.ParcelService_GetParcelAudit_RAW_URL = () => {
  return '/get_parcel_audit'
}
postings.ParcelService_GetParcelAudit_TYPE = () => {
  return 'get'
}
postings.ParcelService_GetParcelAuditURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let path = '/get_parcel_audit'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *
 * request: ParcelService_GetParcels
 * url: ParcelService_GetParcelsURL
 * method: ParcelService_GetParcels_TYPE
 * raw_url: ParcelService_GetParcels_RAW_URL
 */
postings.ParcelService_GetParcels = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let config = parameters.$config || {}
  let path = '/get_parcels'
  let body
  let queryParameters = {}
  let headers = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  config.headers = {
    ...config.heaers,
    ...headers
  }
  return postings._request('get', domain + path, body, queryParameters, form, config)
}
postings.ParcelService_GetParcels_RAW_URL = () => {
  return '/get_parcels'
}
postings.ParcelService_GetParcels_TYPE = () => {
  return 'get'
}
postings.ParcelService_GetParcelsURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let path = '/get_parcels'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *
 * request: ParcelService_SaveParcelSize
 * url: ParcelService_SaveParcelSizeURL
 * method: ParcelService_SaveParcelSize_TYPE
 * raw_url: ParcelService_SaveParcelSize_RAW_URL
 * @param body - body
 */
postings.ParcelService_SaveParcelSize = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let config = parameters.$config || {}
  let path = '/save_parcel_size'
  let body
  let queryParameters = {}
  let headers = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  config.headers = {
    ...config.heaers,
    ...headers
  }
  return postings._request('post', domain + path, body, queryParameters, form, config)
}
postings.ParcelService_SaveParcelSize_RAW_URL = () => {
  return '/save_parcel_size'
}
postings.ParcelService_SaveParcelSize_TYPE = () => {
  return 'post'
}
postings.ParcelService_SaveParcelSizeURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let path = '/save_parcel_size'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *
 * request: ParcelService_UpdateParcel
 * url: ParcelService_UpdateParcelURL
 * method: ParcelService_UpdateParcel_TYPE
 * raw_url: ParcelService_UpdateParcel_RAW_URL
 * @param body - body
 */
postings.ParcelService_UpdateParcel = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let config = parameters.$config || {}
  let path = '/update_parcel'
  let body
  let queryParameters = {}
  let headers = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  config.headers = {
    ...config.heaers,
    ...headers
  }
  return postings._request('post', domain + path, body, queryParameters, form, config)
}
postings.ParcelService_UpdateParcel_RAW_URL = () => {
  return '/update_parcel'
}
postings.ParcelService_UpdateParcel_TYPE = () => {
  return 'post'
}
postings.ParcelService_UpdateParcelURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : postings._getDomain()
  let path = '/update_parcel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
export default postings
