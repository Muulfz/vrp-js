import vRPAccessor from './vRPAccessor';
import { UserSources } from './base';

export type HomeCallback = (
    ownerId: number,
    slotType: string,
    slotId: number,
    cid: number,
    config: any,
    x: number,
    y: number,
    z: number,
    player: number
) => void;

export async function defHomeComponent(name: string, onCreate?: HomeCallback, onDestroy?: HomeCallback) {
    await vRPAccessor.invoke('defHomeComponent', name, onCreate, onDestroy);
}

export async function accessHome(userId: number, home: string, number: number) {
    return (await vRPAccessor.invoke('accessHome', userId, home, number)) as boolean;
}

export async function getHomeSlotPlayers(slotType: string, slotId: number) {
    return (await vRPAccessor.invoke('getHomeSlotPlayers', slotType, slotId)) as UserSources;
}
