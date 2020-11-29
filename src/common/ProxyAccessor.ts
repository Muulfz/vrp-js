import IdGenerator from './IdGenerator';

export default class ProxyAccessor {
    private readonly _name: string;
    private readonly _identifier: string;
    private readonly _ids: IdGenerator;
    private readonly _callbacks: ((value: unknown) => void)[];

    constructor(name: string, identifier = GetCurrentResourceName()) {
        this._name = name;
        this._identifier = identifier;
        this._ids = new IdGenerator();
        this._callbacks = [];

        on(`${this._name}:${this._identifier}:proxy_res`, (id: number, payloads: unknown[]) => {
            const callback = this._callbacks[id];
            if (callback) {
                callback(payloads.length <= 1 ? payloads[0] : payloads);
                delete this._callbacks[id];
                this._ids.free(id);
            }
        });
    }

    invoke(member: string, ...args: any[]) {
        return new Promise<unknown>((resolve) => {
            const id = this._ids.gen();

            this._callbacks[id] = resolve;

            emit(`${this._name}:proxy`, member, args, this._identifier, id);
        });
    }

    trigger(member: string, ...args: any[]) {
        emit(`${this._name}:proxy`, member, args, this._identifier, -1);
    }
}
