/**
 * @description: ContentType Enum
 */
export enum ContentTypeEnum {
  // json object
  JSON = 'application/json;charset=UTF-8',
  // form-data query string
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data upload file
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

/**
 * @description: 与后端协定的状态 code
 */
export enum ResultEnum {
  // SUCCESS = 0,
  // ERROR = 1
  SUCCESS = 1,
  ERROR = 0
}
