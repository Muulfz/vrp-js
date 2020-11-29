export default class IdGenerator {
    private _max: number;
    private _ids: number[];

    constructor() {
        this._max = 0;
        this._ids = [];
    }

    gen() {
        return this._ids.pop() ?? this._max++;
    }

    free(id: number) {
        this._ids.push(id);
    }

    clear() {
        this._max = 0;
        this._ids = [];
    }
}
