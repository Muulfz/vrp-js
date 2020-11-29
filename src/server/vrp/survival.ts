import vRPAccessor from './vRPAccessor';

export async function getHunger(userId: number) {
    return (await vRPAccessor.invoke('getHuger', userId)) as number;
}

export async function getThirst(userId: number) {
    return (await vRPAccessor.invoke('getThirst', userId)) as number;
}

export async function setHunger(userId: number, value: number) {
    await vRPAccessor.invoke('setHuger', userId, value);
}

export async function setThirst(userId: number, value: number) {
    await vRPAccessor.invoke('setThirst', userId, value);
}

export async function varyHunger(userId: number, value: number) {
    await vRPAccessor.invoke('varyHunger', userId, value);
}

export async function varyThirst(userId: number, value: number) {
    await vRPAccessor.invoke('varyThirst', userId, value);
}
