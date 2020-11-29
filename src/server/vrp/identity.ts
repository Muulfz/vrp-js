import vRPAccessor from './vRPAccessor';

export interface Identity {
    user_id: number;
    registration: string;
    phone: string;
    firstname: string;
    name: string;
    age: number;
}

export async function getUserIdentitity(userId: number) {
    return (await vRPAccessor.invoke('getUserIdentitity', userId)) as Identity | undefined;
}

export async function getUserByRegistration(registration: string) {
    return (await vRPAccessor.invoke('getUserByRegistration', registration)) as number | undefined;
}

export async function getUserByPhone(phone: string) {
    return (await vRPAccessor.invoke('getUserByPhone', phone)) as number | undefined;
}

export async function generateStringNumber(format: string) {
    return (await vRPAccessor.invoke('generateStringNumber', format)) as string;
}

export async function generateRegistrationNumber() {
    return (await vRPAccessor.invoke('generateRegisrtationNumber')) as string;
}

export async function generatePhoneNumber() {
    return (await vRPAccessor.invoke('generatePhoneNumber')) as string;
}
