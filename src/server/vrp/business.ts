import vRPAccessor from './vRPAccessor';

export interface Business {
    user_id: number;
    name: string;
    description: string;
    capital: number;
    laundered: number;
    reset_timestamp: number;
}

export async function getUserBusiness(userId: number) {
    return (await vRPAccessor.invoke('getUserBusiness', userId)) as Business;
}

export async function closeBusiness(userId: number) {
    await vRPAccessor.invoke('closeBusiness', userId);
}
