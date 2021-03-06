/* tslint:disable */
/* eslint-disable */
/**
 * PlanRide.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SignupInputModel
 */
export interface SignupInputModel {
    /**
     * 
     * @type {string}
     * @memberof SignupInputModel
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof SignupInputModel
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof SignupInputModel
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SignupInputModel
     */
    mobile: string;
}

export function SignupInputModelFromJSON(json: any): SignupInputModel {
    return SignupInputModelFromJSONTyped(json, false);
}

export function SignupInputModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignupInputModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'email': json['email'],
        'mobile': json['mobile'],
    };
}

export function SignupInputModelToJSON(value?: SignupInputModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'mobile': value.mobile,
    };
}

