import vRPAccessor from './vRPAccessor';

export interface UserGroups {
    [group: string]: boolean;
}

export async function getGroupTitle(group: string) {
    return (await vRPAccessor.invoke('getGroupTitle', group)) as string;
}

export async function getUserGroups(userId: number) {
    return (await vRPAccessor.invoke('getUserGroups', userId)) as UserGroups;
}

export async function addUserGroup(userId: number, group: string) {
    await vRPAccessor.invoke('addUserGroup', userId, group);
}

export async function getUserGroupByType(userId: number, gtype: string) {
    return (await vRPAccessor.invoke('getUserGroupType', userId, gtype)) as string;
}

export async function getUsersByGroup(group: string) {
    return (await vRPAccessor.invoke('getUsersByGroup', group)) as number[];
}

export async function getUsersByPermission(permission: string) {
    return (await vRPAccessor.invoke('getUsersByPermission', permission)) as number[];
}

export async function removeUserGroup(userId: number, group: string) {
    await vRPAccessor.invoke('removeUserGroup', userId, group);
}

export async function hasGroup(userId: number, group: string) {
    return (await vRPAccessor.invoke('hasGroup', userId, group)) as boolean;
}

export async function registerPermissionFunction(name: string, callback: (userId: boolean, parts: string[]) => boolean) {
    await vRPAccessor.invoke('registerPermissionFunction', name, callback);
}

export async function hasPermission(userId: number, perm: string) {
    return (await vRPAccessor.invoke('hasPermission', userId, perm)) as boolean;
}

export async function hasPermissions(userId: number, perms: string[]) {
    return (await vRPAccessor.invoke('hasPermissions', userId, perms)) as boolean;
}
