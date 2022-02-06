/**
 * MDES Digital Enablement API
 * These APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously. <br><br> **Authentication** <br><br> Mastercard uses OAuth 1.0a with body hash extension for authenticating the API clients. This requires every request that you send to  Mastercard to be signed with an RSA private key. A private-public RSA key pair must be generated consisting of: <br><br> 1. A private key for the OAuth signature for API requests. It is recommended to keep the private key in a password-protected or hardware keystore. <br> 2. A public key is shared with Mastercard during the project setup process through either a certificate signing request (CSR) or the API Key Generator. Mastercard will use the public key to verify the OAuth signature that is provided on every API call.<br>  An OAUTH1.0a signer library is available on [GitHub](https://github.com/Mastercard/oauth1-signer-java) <br><br> **Encryption** <br><br> All communications between Issuer web service and the Mastercard gateway is encrypted using TLS. <br><br> **Additional Encryption of Sensitive Data** <br><br> In addition to the OAuth authentication, when using MDES Digital Enablement Service, any PCI sensitive and all account holder Personally Identifiable Information (PII) data must be encrypted. This requirement applies to the API fields containing encryptedData. Sensitive data is encrypted using a symmetric session (one-time-use) key. The symmetric session key is then wrapped with an RSA Public Key supplied by Mastercard during API setup phase (the Customer Encryption Key). <br>  Java Client Encryption Library available on [GitHub](https://github.com/Mastercard/client-encryption-java) 
 *
 * The version of the OpenAPI document: 1.3.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TokenDetailGetTokenOnly', 'model/TokenForGetToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TokenDetailGetTokenOnly'), require('./TokenForGetToken'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesDigitalEnablementApi) {
      root.MdesDigitalEnablementApi = {};
    }
    root.MdesDigitalEnablementApi.GetTokenResponseSchema = factory(root.MdesDigitalEnablementApi.ApiClient, root.MdesDigitalEnablementApi.TokenDetailGetTokenOnly, root.MdesDigitalEnablementApi.TokenForGetToken);
  }
}(this, function(ApiClient, TokenDetailGetTokenOnly, TokenForGetToken) {
  'use strict';



  /**
   * The GetTokenResponseSchema model module.
   * @module model/GetTokenResponseSchema
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>GetTokenResponseSchema</code>.
   * @alias module:model/GetTokenResponseSchema
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GetTokenResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTokenResponseSchema} obj Optional instance to populate.
   * @return {module:model/GetTokenResponseSchema} The populated <code>GetTokenResponseSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('responseId')) {
        obj['responseId'] = ApiClient.convertToType(data['responseId'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = TokenForGetToken.constructFromObject(data['token']);
      }
      if (data.hasOwnProperty('tokenDetail')) {
        obj['tokenDetail'] = TokenDetailGetTokenOnly.constructFromObject(data['tokenDetail']);
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the response. 
   * @member {String} responseId
   */
  exports.prototype['responseId'] = undefined;
  /**
   * @member {module:model/TokenForGetToken} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {module:model/TokenDetailGetTokenOnly} tokenDetail
   */
  exports.prototype['tokenDetail'] = undefined;



  return exports;
}));


