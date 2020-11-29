import { ProxyAccessor } from '..';

const vRPAccessor = new ProxyAccessor('vRP', `${GetCurrentResourceName()}:vrp-js`);

export async function setGPS(x: number, y: number) {
    await vRPAccessor.invoke('setGPS', x, y);
}

export async function setBlipRoute(id: number) {
    await vRPAccessor.invoke('setBlipRoute', id);
}

export async function addBlip(x: number, y: number, z: number, idtype: number, idcolor: number, text: string) {
    return (await vRPAccessor.invoke('addBlip', x, y, z, idtype, idcolor, text)) as number;
}

export async function removeBlip(id: number) {
    await vRPAccessor.invoke('removeBlip', id);
}

export async function setNamedBlip(name: string, x: number, y: number, z: number, idtype: number, idcolor: number, text: string) {
    await vRPAccessor.invoke('setNamedBlip', name, x, y, z, idtype, idcolor, text);
}

export async function addMarker(
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    r: number,
    g: number,
    b: number,
    a: number,
    visibleDistance: number
) {
    return (await vRPAccessor.invoke('addMarker', x, y, z, sx, sy, sz, r, g, b, a, visibleDistance)) as number;
}

export async function removeMarker(id: string) {
    await vRPAccessor.invoke('removeMarker', id);
}

export async function setNamedMarker(
    name: string,
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    r: number,
    g: number,
    b: number,
    a: number,
    visibleDistance: number
) {
    await vRPAccessor.invoke('setNamedMarker', name, x, y, z, sx, sy, sz, r, g, b, a, visibleDistance);
}

export async function removeNamedMarker(name: string) {
    await vRPAccessor.invoke('removeNamedMarker', name);
}
