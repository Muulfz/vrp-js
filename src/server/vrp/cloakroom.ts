import vRPAccessor from './vRPAccessor';

export async function removeCloak(player: number) {
    await vRPAccessor.invoke('removeCloak', player);
}
