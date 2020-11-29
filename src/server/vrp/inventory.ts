import vRPAccessor from './vRPAccessor';
import { MenuChoice } from './gui';

export interface Item {
    name: string;
    description: string;
    choices: MenuChoice[];
    weight: number;
}

export interface InventoryItems {
    [idName: string]: {
        amount: number;
    };
}

export type ChestCallback = (idName: string, amount: number) => void;

export async function defInventoryItem(idName: string, name: string, description: string, choices: (args: string[]) => MenuChoice[], weight: number) {
    await vRPAccessor.invoke('defInventoryItem', idName, name, description, choices, weight);
}

export async function computeItemName(item: Item, args: string[]) {
    return (await vRPAccessor.invoke('computeItemName', item, args)) as string;
}

export async function computeItemDescription(item: Item, args: string[]) {
    return (await vRPAccessor.invoke('computeItemDescription', item, args)) as string;
}

export async function computeItemChoices(item: Item, args: string[]) {
    return (await vRPAccessor.invoke('computeItemChoices', item, args)) as MenuChoice[];
}

export async function computeItemWeight(item: Item, args: string[]) {
    return (await vRPAccessor.invoke('computeItemWeight', item, args)) as number;
}

export async function parseItem(idName: string) {
    return (await vRPAccessor.invoke('parseItem', idName)) as string[];
}

export async function getItemDefinition(idName: string) {
    return (await vRPAccessor.invoke('getItemDefinition', idName)) as [string, string, string];
}

export async function getItemName(idName: string) {
    return (await vRPAccessor.invoke('getItemName', idName)) as string;
}

export async function getItemDescription(idName: string) {
    return (await vRPAccessor.invoke('getItemDescription', idName)) as string;
}

export async function getItemChoices(idName: string) {
    return (await vRPAccessor.invoke('getItemChoices', idName)) as MenuChoice[];
}

export async function getItemWeight(idName: string) {
    return (await vRPAccessor.invoke('getItemWeight', idName)) as number;
}

export async function giveInventoryItem(userId: number, idName: string, amount: number, notify: boolean) {
    await vRPAccessor.invoke('giveInventoryItem', userId, idName, amount, notify);
}

export async function tryGetInventoryItem(userId: number, idName: string, amount: number, notify: boolean) {
    return (await vRPAccessor.invoke('tryGetInventoryItem', userId, idName, amount, notify)) as boolean;
}

export async function getInventoryItemAmount(userId: number, idName: string) {
    return await vRPAccessor.invoke('getIncentoryItemAmount', userId, idName);
}

export async function getInventory(userId: number) {
    return (await vRPAccessor.invoke('getInventory', userId)) as InventoryItems;
}

export async function computeItemsWeight(items: InventoryItems) {
    return (await vRPAccessor.invoke('getInventoryMaxWeight', items)) as number;
}

export async function getInventoryWeight(userId: number) {
    return (await vRPAccessor.invoke('getInventoryWeight', userId)) as number;
}

export async function getInventoryMaxWeight(userId: number) {
    return (await vRPAccessor.invoke('getInventoryMaxWeight', userId)) as number;
}

export async function clearInventory(userId: number) {
    await vRPAccessor.invoke('clearInventory', userId);
}

export async function openInventory(source: number) {
    await vRPAccessor.invoke('openInventory', source);
}

export async function openChest(
    source: number,
    name: string,
    maxWeight: number,
    closeCallback?: () => void,
    inCallback?: ChestCallback,
    outCallback?: ChestCallback
) {
    await vRPAccessor.invoke('openChest', source, name, maxWeight, closeCallback, inCallback, outCallback);
}
