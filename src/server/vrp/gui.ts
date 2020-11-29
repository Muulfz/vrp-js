import vRPAccessor from './vRPAccessor';

export type MenuChoice = [(player: number, choice: string, mod: number) => void, string | undefined];

export interface MenuData {
    [name: string]: any;
}

export type MenuBuilder = (addChoices: (choices: MenuChoice[]) => void, data: any) => void;

export async function openMenu(source: number, menuData: MenuData) {
    await vRPAccessor.invoke('openMenu', source, menuData);
}

export async function closeMenu(source: number) {
    await vRPAccessor.invoke('closeMenu', source);
}

export async function prompt(source: number, title: string, defaultText: string) {
    return (await vRPAccessor.invoke('prompt', source, title, defaultText)) as string;
}

export async function request(source: number, text: string, time: number) {
    return (await vRPAccessor.invoke('request', source, text, time)) as boolean;
}

export async function registerMenuBuilder(name: string, builder: MenuBuilder) {
    await vRPAccessor.invoke('registerMenuBuilder', name, builder);
}

export async function buildMenu(name: string, data: any) {
    await vRPAccessor.invoke('buildMenu', name, data);
}

export async function openMainMenu(source: number) {
    await vRPAccessor.invoke('openMainMenu', source);
}
