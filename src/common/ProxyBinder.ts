export default class ProxyBinder {
    private readonly _name: string;
    private readonly _handlers: { [name: string]: (...args: any) => void };

    constructor(name: string) {
        this._name = name;
        this._handlers = {};

        on(`${this._name}:proxy`, async (member: string, args: any[], identifier: string, id: number) => {
            const payload = this._handlers[name] ? await this._handlers[name](args) : undefined;

            if (id >= 0) {
                emit(`${this._name}:${identifier}:proxy_res`, id, payload);
            }
        });
    }

    register(name: string, handler: (...args: any) => void) {
        this._handlers[name] = handler;
    }

    unregister(name: string) {
        delete this._handlers[name];
    }
}
// Muulfz was here