import vRPAccessor from './vRPAccessor';

export interface DbConfig {
    driver: string;
    host: string;
    database: string;
    user: string;
    password: string;
}

export type QueryParams = { [name: string]: any };

export type QueryMode = 'query' | 'execute' | 'scalar';

export interface UserSources {
    [userId: number]: number;
}

export async function registerDbDriver(
    name: string,
    onInit: (cfg: DbConfig) => void,
    onPrepare: (name: string, query: string) => void,
    onQuery: (name: string, params: QueryParams, mode: QueryMode) => void
) {
    await vRPAccessor.invoke('registerDbDriver', name, onInit, onPrepare, onQuery);
}

export async function prepare(name: string, query: string) {
    await vRPAccessor.invoke('prepare', name, query);
}

export async function query(name: string, params: QueryParams, mode: QueryMode) {
    return await vRPAccessor.invoke('query', name, params, mode);
}

export async function execute(name: string, params: QueryParams) {
    await vRPAccessor.invoke('execute', name, params);
}

export async function scalar(name: string, params: QueryParams) {
    return await vRPAccessor.invoke('scalar', name, params);
}

export async function getUserIdByIdentifiers(identifiers: string[]) {
    return (await vRPAccessor.invoke('getUserIdByIdentifiers', identifiers)) as number | undefined;
}

export async function getSourceIdKey(source: number) {
    return (await vRPAccessor.invoke('getSourceIdKey', source)) as string[];
}

export async function getPlayerEndpoint(player: number) {
    return (await vRPAccessor.invoke('getPlayerEndpoint', player)) as string;
}

export async function getPlayerName(player: number) {
    return (await vRPAccessor.invoke('getPlayerName', player)) as string;
}

export async function isBanned(userId: number) {
    return (await vRPAccessor.invoke('isBanned', userId)) as boolean;
}

export async function setBanned(userId: number, banned: boolean) {
    await vRPAccessor.invoke('getPlayerName', userId, banned);
}

export async function isWhitelisted(userId: number) {
    return (await vRPAccessor.invoke('isWhitelisted', userId)) as boolean;
}

export async function setWhitelisted(userId: number, whitelisted: boolean) {
    await vRPAccessor.invoke('isWhitelisted', userId, whitelisted);
}

export async function getLastLogin(userId: number) {
    return (await vRPAccessor.invoke('getLastLogin', userId)) as string;
}

export async function setUData(userId: number, key: string, value: string) {
    await vRPAccessor.invoke('setUData', userId, key, value);
}

export async function getUData(userId: number, key: string) {
    return (await vRPAccessor.invoke('getUData', userId, key)) as string;
}

export async function setSData(key: string, value: string) {
    await vRPAccessor.invoke('setSData', key, value);
}

export async function getSData(key: string) {
    return (await vRPAccessor.invoke('getSData', key)) as string;
}

export async function getUserDataTable(userId: number) {
    return (await vRPAccessor.invoke('getUserDataTable', userId)) as any;
}

export async function getUserTmpTable(userId: number) {
    return (await vRPAccessor.invoke('getUserTmpTable', userId)) as any;
}

export async function getSpawns(userId: number) {
    return (await vRPAccessor.invoke('getSpawns', userId)) as number;
}

export async function getUserId(source: number) {
    return (await vRPAccessor.invoke('getUserId', source)) as number | undefined;
}

export async function getUsers() {
    return (await vRPAccessor.invoke('getUsers')) as UserSources;
}

export async function getUserSource(userId: number) {
    return (await vRPAccessor.invoke('getUserSource', userId)) as number | undefined;
}

export async function ban(source: number, reason: string) {
    await vRPAccessor.invoke('ban', source, reason);
}

export async function kick(source: number, reason: string) {
    await vRPAccessor.invoke('kick', source, reason);
}

export async function dropPlayer(source: number) {
    await vRPAccessor.invoke('dropPlayer', source);
}
