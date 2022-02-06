# MdesDigitalEnablementApi.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **String** | An element used to indicate the source of the issue causing this error. Must be one of  * &#39;MDES&#39;  * &#39;INPUT&#39;  | [optional] 
**errorCode** | **String** | An error code generated by the gateway if the error occurs before reaching the MDES application. maxLength: 100  | [optional] 
**description** | **String** | Description of the reason the operation failed. See API Response Errors  | [optional] 
**reasonCode** | **String** | A reason code for the error that has occurred.  | [optional] 
**recoverable** | **Boolean** | Generated by the gateway to indicate if the request could presented again for processing. Either \&quot;TRUE\&quot; or \&quot;FALSE\&quot;  | [optional] 

