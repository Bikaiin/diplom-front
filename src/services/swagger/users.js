/* eslint-disable */
import qs from 'qs'
import axios from 'axios'
let users = {}
users._domain = ''
users._getDomain = () => {
  return users._domain
}
users._setDomain = ($domain) => {
  users._domain = $domain
}
users._request = (method, url, body, queryParameters, form, config) => {
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
 * request: AuthService_Auth
 * url: AuthService_AuthURL
 * method: AuthService_Auth_TYPE
 * raw_url: AuthService_Auth_RAW_URL
 * @param body - body
 */
users.AuthService_Auth = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/auth'
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
	console.log(config)
  return users._request('post', domain + path, body, queryParameters, form, config)
}
users.AuthService_Auth_RAW_URL = () => {
  return '/v1/auth'
}
users.AuthService_Auth_TYPE = () => {
  return 'post'
}
users.AuthService_AuthURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/auth'
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
 * request: AuthService_Check
 * url: AuthService_CheckURL
 * method: AuthService_Check_TYPE
 * raw_url: AuthService_Check_RAW_URL
 * @param token - token
 */
users.AuthService_Check = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/check'
  let body
  let queryParameters = {}
  let headers = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
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
  return users._request('get', domain + path, body, queryParameters, form, config)
}
users.AuthService_Check_RAW_URL = () => {
  return '/v1/check'
}
users.AuthService_Check_TYPE = () => {
  return 'get'
}
users.AuthService_CheckURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/check'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
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
 * request: AuthService_Create
 * url: AuthService_CreateURL
 * method: AuthService_Create_TYPE
 * raw_url: AuthService_Create_RAW_URL
 * @param body - body
 */
users.AuthService_Create = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/create'
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
  return users._request('post', domain + path, body, queryParameters, form, config)
}
users.AuthService_Create_RAW_URL = () => {
  return '/v1/create'
}
users.AuthService_Create_TYPE = () => {
  return 'post'
}
users.AuthService_CreateURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/create'
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
 * request: AuthService_GetRoles
 * url: AuthService_GetRolesURL
 * method: AuthService_GetRoles_TYPE
 * raw_url: AuthService_GetRoles_RAW_URL
 */
users.AuthService_GetRoles = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/get_roles'
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
  return users._request('get', domain + path, body, queryParameters, form, config)
}
users.AuthService_GetRoles_RAW_URL = () => {
  return '/v1/get_roles'
}
users.AuthService_GetRoles_TYPE = () => {
  return 'get'
}
users.AuthService_GetRolesURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/get_roles'
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
 * request: AuthService_GetUsers
 * url: AuthService_GetUsersURL
 * method: AuthService_GetUsers_TYPE
 * raw_url: AuthService_GetUsers_RAW_URL
 */
users.AuthService_GetUsers = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/get_users'
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
  return users._request('get', domain + path, body, queryParameters, form, config)
}
users.AuthService_GetUsers_RAW_URL = () => {
  return '/v1/get_users'
}
users.AuthService_GetUsers_TYPE = () => {
  return 'get'
}
users.AuthService_GetUsersURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/get_users'
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
 * request: AuthService_Refresh
 * url: AuthService_RefreshURL
 * method: AuthService_Refresh_TYPE
 * raw_url: AuthService_Refresh_RAW_URL
 * @param body - body
 */
users.AuthService_Refresh = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/refresh'
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
  return users._request('post', domain + path, body, queryParameters, form, config)
}
users.AuthService_Refresh_RAW_URL = () => {
  return '/v1/refresh'
}
users.AuthService_Refresh_TYPE = () => {
  return 'post'
}
users.AuthService_RefreshURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/refresh'
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
 * request: AuthService_UpdateUser
 * url: AuthService_UpdateUserURL
 * method: AuthService_UpdateUser_TYPE
 * raw_url: AuthService_UpdateUser_RAW_URL
 * @param body - body
 */
users.AuthService_UpdateUser = (parameters = {}) => {
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let config = parameters.$config || {}
  let path = '/v1/update_user'
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
  return users._request('post', domain + path, body, queryParameters, form, config)
}
users.AuthService_UpdateUser_RAW_URL = () => {
  return '/v1/update_user'
}
users.AuthService_UpdateUser_TYPE = () => {
  return 'post'
}
users.AuthService_UpdateUserURL = (parameters = {}) => {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : users._getDomain()
  let path = '/v1/update_user'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach((parameterName) => {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
export default users
