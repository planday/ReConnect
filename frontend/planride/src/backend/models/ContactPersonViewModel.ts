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
import {
    UserViewModel,
    UserViewModelFromJSON,
    UserViewModelFromJSONTyped,
    UserViewModelToJSON,
} from './UserViewModel';

/**
 * 
 * @export
 * @interface ContactPersonViewModel
 */
export interface ContactPersonViewModel {
    /**
     * 
     * @type {UserViewModel}
     * @memberof ContactPersonViewModel
     */
    user: UserViewModel;
    /**
     * 
     * @type {string}
     * @memberof ContactPersonViewModel
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactPersonViewModel
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactPersonViewModel
     */
    custom?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactPersonViewModel
     */
    customType?: string | null;
}

export function ContactPersonViewModelFromJSON(json: any): ContactPersonViewModel {
    return ContactPersonViewModelFromJSONTyped(json, false);
}

export function ContactPersonViewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactPersonViewModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserViewModelFromJSON(json['user']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
        'customType': !exists(json, 'customType') ? undefined : json['customType'],
    };
}

export function ContactPersonViewModelToJSON(value?: ContactPersonViewModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserViewModelToJSON(value.user),
        'email': value.email,
        'phone': value.phone,
        'custom': value.custom,
        'customType': value.customType,
    };
}
