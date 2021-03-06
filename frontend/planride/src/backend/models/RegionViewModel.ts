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
 * @interface RegionViewModel
 */
export interface RegionViewModel {
    /**
     * 
     * @type {number}
     * @memberof RegionViewModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof RegionViewModel
     */
    name: string;
}

export function RegionViewModelFromJSON(json: any): RegionViewModel {
    return RegionViewModelFromJSONTyped(json, false);
}

export function RegionViewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegionViewModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function RegionViewModelToJSON(value?: RegionViewModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

