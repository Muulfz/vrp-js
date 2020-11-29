import vRPAccessor from './vRPAccessor';

export type AptitudeDefinition = [string, number, number];

export interface UserAptitudes {
    [group: string]: { [aptitude: string]: number };
}

export async function defAptitudeGroup(group: string, title: string) {
    await vRPAccessor.invoke('defAptitudeGroup', group, title);
}

export async function defAptitude(group: string, aptitude: string, title: string, initExperience: number, maxExperience: number) {
    await vRPAccessor.invoke('defAptitudeGroup', group, aptitude, title, initExperience, maxExperience);
}

export async function getAptitudeDefinition(group: string, aptitude: string) {
    return (await vRPAccessor.invoke('getAptitudeDefinition', group, aptitude)) as AptitudeDefinition;
}

export async function getAptitudeGroupTitle(group: string) {
    return (await vRPAccessor.invoke('getAptitudeDefinition', group)) as string;
}

export async function getUserAptitudes(userId: number) {
    return (await vRPAccessor.invoke('levelUp', userId)) as UserAptitudes;
}

export async function varyExp(userId: number, group: string, aptitude: string, amount: number) {
    await vRPAccessor.invoke('levelUp', userId, group, aptitude, amount);
}

export async function levelUp(userId: number, group: string, aptitude: string) {
    await vRPAccessor.invoke('levelUp', userId, group, aptitude);
}

export async function levelDown(userId: number, group: string, aptitude: string) {
    await vRPAccessor.invoke('levelDown', userId, group, aptitude);
}

export async function getExp(userId: number, group: string, aptitude: string) {
    return (await vRPAccessor.invoke('getExp', userId, group, aptitude)) as number;
}

export async function setExp(userId: number, group: string, aptitude: string, amount: number) {
    await vRPAccessor.invoke('setExp', userId, group, aptitude, amount);
}

export async function expToLevel(experience: number) {
    return (await vRPAccessor.invoke('expToLevel', experience)) as number;
}

export async function levelToExp(level: number) {
    return (await vRPAccessor.invoke('levelToExp', level)) as number;
}
