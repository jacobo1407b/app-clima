import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//icons
const sol = require('../assets/icons/icon-sun.png');
const claros = require('../assets/icons/icon-claros.png');
const moon = require('../assets/icons/moon.png');
const chubasco = require('../assets/icons/rain.png');
const moonClaro = require('../assets/icons/moon-claro.png');
const cloud = require('../assets/icons/cloud.png');
//inits img
const coverSun = require('../assets/cover/sun.jpg');//despejado
const coverMon = require('../assets/cover/luna.jpg');//despejado
const claroSun = require('../assets/cover/claro.jpg');//clarossun
const stormMon = require('../assets/cover/stormfront.jpg');
const stormSun = require('../assets/cover/storm-day.jpg');
const nublado = require('../assets/cover/nublado.jpg');

async function onPermis(): Promise<boolean> {

    let { status } = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);
    if (status == 'granted') {
        return true;
    } else {
        alert('Para utilizar esta aplicación acepta los permisos')
        return false;
    }
}

export async function getLocation() {
    if (await onPermis()) {
        let location = await Location.getCurrentPositionAsync({});
        return location
    }
}

export function getHour(date: string | number): number {
    var fecha = new Date(date);
    return fecha.getHours();
}

export function comprobarHora(weather?: number) {
    var hora = getHour(Date.now());
    switch (weather) {
        case 33: //despejado
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return coverMon;
            } else {
                return coverSun
            }
        case 34: //despejado
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return coverMon;
            } else {
                return coverSun
            }
        case 4: //nublado y claros
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return claroSun;
            } else {
                return claroSun
            }
        case 12: //chubasco
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return stormMon;
            } else {
                return stormSun
            }
        case 13: //chubasco
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return stormMon;
            } else {
                return stormSun
            }
        case 6: //nublado
            return nublado;
        case 35: //nublado
            return nublado;
        default:
            return stormSun
    }
}

export function getIcon(num: number, hora: number): any {
    switch (num) {
        case 4:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return moonClaro;
            } else {
                return claros
            }
        case 35:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return moonClaro;
            } else {
                return claros
            }
        case 33:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return moon;
            } else {
                return sol;
            }
        case 34:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return moon;
            } else {
                return sol;
            }
        case 12 || 13 || 39:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return chubasco;
            } else {
                return chubasco;
            }
        case 13:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return chubasco;
            } else {
                return chubasco;
            }
        case 39:
            if ((hora >= 0 && hora < 6) || (hora > 18 && hora < 24)) {
                return chubasco;
            } else {
                return chubasco;
            }
        case 6:
            return cloud;
        default:
            return sol;
    }
    //icon-claros.png
}
//33 -> Despejado,  4 -> Nubes y claros
//12 -> chubasco
//34 -> despejado
//13 -> chubasco
//6 -> mayormente nublado

//35 -> parcialmente nublado
//39 -> parcialmente nublado con chubasco

