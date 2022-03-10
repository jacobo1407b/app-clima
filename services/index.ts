//import {ListHour} from '../types';
const apiKey: string = "6KreM0PzBDzVzsqFliXGAugANy0RmxNd";
//const apiKey: string = "AKNBylrAXRUbkCEYvmuWVN4Df8nVQz34";
const baseUrl: string = "http://dataservice.accuweather.com";

var requestOptions = {
    method: 'GET'
};

export function getLocationKey(lat?: number, long?: number) {
    //locations/v1/cities/geoposition/search
    return fetch(`${baseUrl}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.Code) {
                throw result;
            }
            return result
        })
        .catch(error => {
            throw error;
        });
}

export function getClima(key?: string): Promise<any> {
    return fetch(`${baseUrl}/currentconditions/v1/${key}?apikey=${apiKey}&language=es&details=true`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.Code) {
                throw result;
            }
            return result
        })
        .catch(error => {
            throw error;
        })
}

export function getListHours(key?: string) {
    return fetch(`${baseUrl}/forecasts/v1/hourly/12hour/${key}?apikey=${apiKey}&language=es&metric=true`)
        .then(response => response.json())
        .then(result => {
            if (result.Code) {
                throw result;
            }
            return result
        })
        .catch(error => {
            throw error;
        })
}

type err = {
    "Code": string,
    "Message": string,
    "Reference": string,
}

export function errorManager(er:err) {
    alert(er.Message)
}
//lat 19.42888053600302
//long -97.79652208998681