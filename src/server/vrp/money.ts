import vRPAccessor from './vRPAccessor';

export async function getMoney(userId: number) {
    return (await vRPAccessor.invoke('getMoney', userId)) as number;
}

export async function setMoney(userId: number, value: number) {
    await vRPAccessor.invoke('setMoney', userId, value);
}

export async function tryPayment(userId: number, amount: number) {
    (await vRPAccessor.invoke('tryPayment', userId, amount)) as boolean;
}

export async function giveMoney(userId: number, amount: number) {
    return vRPAccessor.invoke('giveMoney', userId, amount);
}

export async function getBankMoney(userId: number) {
    return (await vRPAccessor.invoke('getBankMoney', userId)) as number;
}

export async function setBankMoney(userId: number, value: number) {
    await vRPAccessor.invoke('setBankMoney', userId, value);
}

export async function giveBankMoney(userId: number, amount: number) {
    return vRPAccessor.invoke('giveBank', userId, amount);
}

export async function tryWithdraw(userId: number, amount: number) {
    return (await vRPAccessor.invoke('tryWithdraw', userId, amount)) as boolean;
}

export async function tryDeposit(userId: number, amount: number) {
    return (await vRPAccessor.invoke('tryDeposit', userId, amount)) as boolean;
}

export async function tryFullPayment(userId: number, amount: number) {
    (await vRPAccessor.invoke('tryFullPayment', userId, amount)) as boolean;
}
