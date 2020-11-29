import vRPAccessor from './vRPAccessor';

export type AreaCallback = (source: number, name: string) => void;

export async function setArea(
    source: number,
    name: string,
    x: number,
    y: number,
    z: number,
    radius: number,
    height: number,
    enterCallback?: AreaCallback,
    leaveCallback?: AreaCallback
) {
    await vRPAccessor.invoke('setArea', source, name, x, y, z, radius, height, enterCallback, leaveCallback);
}

export async function inArea(source: number, name: string) {
    return (await vRPAccessor.invoke('inArea', source, name)) as boolean;
}

export async function removeArea(source: number, name: string) {
    await vRPAccessor.invoke('removeArea', source, name);
}
