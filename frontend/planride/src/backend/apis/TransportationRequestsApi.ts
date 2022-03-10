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


import * as runtime from '../runtime';
import {
    CreateTransportationRequestInputModel,
    CreateTransportationRequestInputModelFromJSON,
    CreateTransportationRequestInputModelToJSON,
    TransportationRequestDetailsViewModel,
    TransportationRequestDetailsViewModelFromJSON,
    TransportationRequestDetailsViewModelToJSON,
    TransportationRequestViewModel,
    TransportationRequestViewModelFromJSON,
    TransportationRequestViewModelToJSON,
} from '../models';

export interface CreateRequestRequest {
    createTransportationRequestInputModel?: CreateTransportationRequestInputModel;
}

export interface DeleteRequestRequest {
    requestId: string;
}

export interface GetRequestDetailsRequest {
    requestId: string;
}

/**
 * 
 */
export class TransportationRequestsApi extends runtime.BaseAPI {

    /**
     */
    async createRequestRaw(requestParameters: CreateRequestRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/requests`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTransportationRequestInputModelToJSON(requestParameters.createTransportationRequestInputModel),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createRequest(requestParameters: CreateRequestRequest = {}, initOverrides?: RequestInit): Promise<void> {
        await this.createRequestRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteRequestRaw(requestParameters: DeleteRequestRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.requestId === null || requestParameters.requestId === undefined) {
            throw new runtime.RequiredError('requestId','Required parameter requestParameters.requestId was null or undefined when calling deleteRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/requests/{requestId}`.replace(`{${"requestId"}}`, encodeURIComponent(String(requestParameters.requestId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteRequest(requestParameters: DeleteRequestRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteRequestRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getRequestDetailsRaw(requestParameters: GetRequestDetailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TransportationRequestDetailsViewModel>> {
        if (requestParameters.requestId === null || requestParameters.requestId === undefined) {
            throw new runtime.RequiredError('requestId','Required parameter requestParameters.requestId was null or undefined when calling getRequestDetails.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/requests/{requestId}`.replace(`{${"requestId"}}`, encodeURIComponent(String(requestParameters.requestId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransportationRequestDetailsViewModelFromJSON(jsonValue));
    }

    /**
     */
    async getRequestDetails(requestParameters: GetRequestDetailsRequest, initOverrides?: RequestInit): Promise<TransportationRequestDetailsViewModel> {
        const response = await this.getRequestDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getRequestsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<TransportationRequestViewModel>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/requests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransportationRequestViewModelFromJSON));
    }

    /**
     */
    async getRequests(initOverrides?: RequestInit): Promise<Array<TransportationRequestViewModel>> {
        const response = await this.getRequestsRaw(initOverrides);
        return await response.value();
    }

}