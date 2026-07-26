import { Logger } from 'homebridge';
import { ThermostatApiClient, ThermostatState, ThermostatSchedule } from './api';
export declare class SelfHostedAPI implements ThermostatApiClient {
    private readonly baseUrl;
    private readonly apiKey;
    private readonly log;
    private readonly isHttps;
    private readonly readFailures;
    constructor(apiKey: string, serverUrl: string, log: Logger);
    get sourceLabel(): string;
    get supportsLearningMode(): boolean;
    get supportsFanControl(): boolean;
    private request;
    private requestOnce;
    getThermostatStates(): Promise<ThermostatState[]>;
    getThermostatState(deviceId: string): Promise<ThermostatState | null>;
    private parseDevice;
    setTemperature(deviceId: string, temperature: number, _mode: 'heat' | 'cool'): Promise<void>;
    setTemperatureRange(deviceId: string, lowTemperature: number, highTemperature: number): Promise<void>;
    setMode(deviceId: string, mode: 'off' | 'heat' | 'cool' | 'heat-cool'): Promise<void>;
    setAwayMode(deviceId: string, away: boolean): Promise<void>;
    setFan(_deviceId: string, _mode: 'on' | 'auto' | 'off'): Promise<void>;
    getSchedule(deviceId: string): Promise<ThermostatSchedule | null>;
    setSchedule(deviceId: string, schedule: ThermostatSchedule): Promise<void>;
    clearSchedule(deviceId: string): Promise<void>;
    setLearningMode(deviceId: string, enabled: boolean): Promise<void>;
}
