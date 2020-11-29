import vRPAccessor from './vRPAccessor';

export async function insertPoliceRecord(userId: number, line: string) {
    await vRPAccessor.invoke('insertPoliceRecord', userId, line);
}
