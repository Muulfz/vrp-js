import vRPAccessor from './vRPAccessor';
import { AreaCallback } from './map';

export interface MissionStep {
    text: string;
    position: [number, number, number];
    blipid?: number;
    blipcolor?: number;
    onenter?: AreaCallback;
    onleave?: AreaCallback;
}

export interface MissionData {
    name: string;
    steps: MissionStep[];
}

export async function startMission(player: number, missionData: MissionData) {
    await vRPAccessor.invoke('startMission', player, missionData);
}

export async function nextMissionStep(player: number) {
    await vRPAccessor.invoke('nextMissionStep', player);
}

export async function stopMission(player: number) {
    await vRPAccessor.invoke('nextMissionStep', player);
}

export async function hasMission(player: number) {
    await vRPAccessor.invoke('hasMission', player);
}
