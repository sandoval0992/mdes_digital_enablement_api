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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesDigitalEnablementApi) {
      root.MdesDigitalEnablementApi = {};
    }
    root.MdesDigitalEnablementApi.ProductConfig = factory(root.MdesDigitalEnablementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductConfig model module.
   * @module model/ProductConfig
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ProductConfig</code>.
   * @alias module:model/ProductConfig
   * @class
   * @param brandLogoAssetId {String} The MasterCard or Maestro brand logo associated with this card. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. Always returned in Product Configuration object 
   * @param issuerLogoAssetId {String} The logo of the issuing bank. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. Always returned in Product Configuration object 
   * @param isCoBranded {Boolean} Whether the product is co-branded. Must be either true (this is a co-branded product) or false (this is not a co-branded product). Always returned in Product Configuration object 
   * @param iconAssetId {String} The icon representing the primary brand(s) associated with this product. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. Always returned in Product Configuration object 
   * @param foregroundColor {String} Foreground color, used to overlay text on top of the card image. Always returned in Product Configuration object 
   * @param issuerName {String} Name of the issuing bank. Always returned in Product Configuration object 
   * @param shortDescription {String} A short description for this product. Always returned in Product Configuration object 
   */
  var exports = function(brandLogoAssetId, issuerLogoAssetId, isCoBranded, iconAssetId, foregroundColor, issuerName, shortDescription) {
    var _this = this;

    _this['brandLogoAssetId'] = brandLogoAssetId;
    _this['issuerLogoAssetId'] = issuerLogoAssetId;
    _this['isCoBranded'] = isCoBranded;
    _this['iconAssetId'] = iconAssetId;
    _this['foregroundColor'] = foregroundColor;
    _this['issuerName'] = issuerName;
    _this['shortDescription'] = shortDescription;
  };

  /**
   * Constructs a <code>ProductConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductConfig} obj Optional instance to populate.
   * @return {module:model/ProductConfig} The populated <code>ProductConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('brandLogoAssetId')) {
        obj['brandLogoAssetId'] = ApiClient.convertToType(data['brandLogoAssetId'], 'String');
      }
      if (data.hasOwnProperty('issuerLogoAssetId')) {
        obj['issuerLogoAssetId'] = ApiClient.convertToType(data['issuerLogoAssetId'], 'String');
      }
      if (data.hasOwnProperty('isCoBranded')) {
        obj['isCoBranded'] = ApiClient.convertToType(data['isCoBranded'], 'Boolean');
      }
      if (data.hasOwnProperty('coBrandName')) {
        obj['coBrandName'] = ApiClient.convertToType(data['coBrandName'], 'String');
      }
      if (data.hasOwnProperty('coBrandLogoAssetId')) {
        obj['coBrandLogoAssetId'] = ApiClient.convertToType(data['coBrandLogoAssetId'], 'String');
      }
      if (data.hasOwnProperty('cardBackgroundCombinedAssetId')) {
        obj['cardBackgroundCombinedAssetId'] = ApiClient.convertToType(data['cardBackgroundCombinedAssetId'], 'String');
      }
      if (data.hasOwnProperty('cardBackgroundAssetId')) {
        obj['cardBackgroundAssetId'] = ApiClient.convertToType(data['cardBackgroundAssetId'], 'String');
      }
      if (data.hasOwnProperty('iconAssetId')) {
        obj['iconAssetId'] = ApiClient.convertToType(data['iconAssetId'], 'String');
      }
      if (data.hasOwnProperty('foregroundColor')) {
        obj['foregroundColor'] = ApiClient.convertToType(data['foregroundColor'], 'String');
      }
      if (data.hasOwnProperty('issuerName')) {
        obj['issuerName'] = ApiClient.convertToType(data['issuerName'], 'String');
      }
      if (data.hasOwnProperty('shortDescription')) {
        obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
      }
      if (data.hasOwnProperty('longDescription')) {
        obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
      }
      if (data.hasOwnProperty('customerServiceUrl')) {
        obj['customerServiceUrl'] = ApiClient.convertToType(data['customerServiceUrl'], 'String');
      }
      if (data.hasOwnProperty('customerServiceEmail')) {
        obj['customerServiceEmail'] = ApiClient.convertToType(data['customerServiceEmail'], 'String');
      }
      if (data.hasOwnProperty('customerServicePhoneNumber')) {
        obj['customerServicePhoneNumber'] = ApiClient.convertToType(data['customerServicePhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('issuerMobileApp')) {
        obj['issuerMobileApp'] = ApiClient.convertToType(data['issuerMobileApp'], Object);
      }
      if (data.hasOwnProperty('onlineBankingLoginUrl')) {
        obj['onlineBankingLoginUrl'] = ApiClient.convertToType(data['onlineBankingLoginUrl'], 'String');
      }
      if (data.hasOwnProperty('termsAndConditionsUrl')) {
        obj['termsAndConditionsUrl'] = ApiClient.convertToType(data['termsAndConditionsUrl'], 'String');
      }
      if (data.hasOwnProperty('privacyPolicyUrl')) {
        obj['privacyPolicyUrl'] = ApiClient.convertToType(data['privacyPolicyUrl'], 'String');
      }
      if (data.hasOwnProperty('issuerProductConfigCode')) {
        obj['issuerProductConfigCode'] = ApiClient.convertToType(data['issuerProductConfigCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The MasterCard or Maestro brand logo associated with this card. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. Always returned in Product Configuration object 
   * @member {String} brandLogoAssetId
   */
  exports.prototype['brandLogoAssetId'] = undefined;
  /**
   * The logo of the issuing bank. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. Always returned in Product Configuration object 
   * @member {String} issuerLogoAssetId
   */
  exports.prototype['issuerLogoAssetId'] = undefined;
  /**
   * Whether the product is co-branded. Must be either true (this is a co-branded product) or false (this is not a co-branded product). Always returned in Product Configuration object 
   * @member {Boolean} isCoBranded
   */
  exports.prototype['isCoBranded'] = undefined;
  /**
   * Textual name of the co-brand partner. Required if CoBranded is true, not present otherwise. **Conditional: Conditionally required if isCoBranded = \"true\". Not present otherwise** 
   * @member {String} coBrandName
   */
  exports.prototype['coBrandName'] = undefined;
  /**
   * The co-brand logo (if any) for this product. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. 
   * @member {String} coBrandLogoAssetId
   */
  exports.prototype['coBrandLogoAssetId'] = undefined;
  /**
   * The card image used to represent the digital card in the wallet. This ?combined? option contains the MasterCard, bank and any co- brand logos.  Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. **Conditional: either CardBackgroundCombined or CardBackground will be provided** 
   * @member {String} cardBackgroundCombinedAssetId
   */
  exports.prototype['cardBackgroundCombinedAssetId'] = undefined;
  /**
   * The card image used to represent the digital card in the wallet. This ?non-combined? option does not contain the MasterCard, bank, or co-brand logos. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. **Conditional: either CardBackgroundCombined or CardBackground will be provided** 
   * @member {String} cardBackgroundAssetId
   */
  exports.prototype['cardBackgroundAssetId'] = undefined;
  /**
   * The icon representing the primary brand(s) associated with this product. Provided as an Asset ID ? use the Get Asset API to retrieve the actual asset. Always returned in Product Configuration object 
   * @member {String} iconAssetId
   */
  exports.prototype['iconAssetId'] = undefined;
  /**
   * Foreground color, used to overlay text on top of the card image. Always returned in Product Configuration object 
   * @member {String} foregroundColor
   */
  exports.prototype['foregroundColor'] = undefined;
  /**
   * Name of the issuing bank. Always returned in Product Configuration object 
   * @member {String} issuerName
   */
  exports.prototype['issuerName'] = undefined;
  /**
   * A short description for this product. Always returned in Product Configuration object 
   * @member {String} shortDescription
   */
  exports.prototype['shortDescription'] = undefined;
  /**
   * A long description for this product. 
   * @member {String} longDescription
   */
  exports.prototype['longDescription'] = undefined;
  /**
   * Customer service website of the issuing bank. 
   * @member {String} customerServiceUrl
   */
  exports.prototype['customerServiceUrl'] = undefined;
  /**
   * Customer service email address of the issuing bank. 
   * @member {String} customerServiceEmail
   */
  exports.prototype['customerServiceEmail'] = undefined;
  /**
   * Customer service phone number of the issuing bank. 
   * @member {String} customerServicePhoneNumber
   */
  exports.prototype['customerServicePhoneNumber'] = undefined;
  /**
   * Contains one or more mobile app details that may be used to deep link from the Mobile Payment App to the issuer mobile app. 
   * @member {Object} issuerMobileApp
   */
  exports.prototype['issuerMobileApp'] = undefined;
  /**
   * Logon URL for the issuing bank?s online banking website. 
   * @member {String} onlineBankingLoginUrl
   */
  exports.prototype['onlineBankingLoginUrl'] = undefined;
  /**
   * URL linking to the issuing bank?s terms and conditions for this product. 
   * @member {String} termsAndConditionsUrl
   */
  exports.prototype['termsAndConditionsUrl'] = undefined;
  /**
   * URL linking to the issuing bank?s privacy policy for this product. 
   * @member {String} privacyPolicyUrl
   */
  exports.prototype['privacyPolicyUrl'] = undefined;
  /**
   * Freeform identifier for this product configuration as assigned by the issuer. 
   * @member {String} issuerProductConfigCode
   */
  exports.prototype['issuerProductConfigCode'] = undefined;



  return exports;
}));


