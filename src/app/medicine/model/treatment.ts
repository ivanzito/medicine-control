import { RangeTreatment } from "./rangeTreatment"

export class Treatment {
    _start:Date
    _end:Date
    _range: RangeTreatment

    constructor(start:Date, end:Date, range: RangeTreatment) {
        this._start = start
        this._end = end
        this._range = range
    }


    get range(): RangeTreatment {
        return this._range
    }

    set range(value:RangeTreatment) {
        this.range = value
    }

    get start(): string {
        var dd = String(this._start.getDate()).padStart(2, '0');
        var mm = String(this._start.getMonth()! + 1).padStart(2, '0'); //January is 0!
        var yyyy = this._start.getFullYear();
        return `${dd}/${mm}/${yyyy}`
    }

    get end(): string {
        var dd = String(this._end.getDate()).padStart(2, '0');
        var mm = String(this._end.getMonth()! + 1).padStart(2, '0'); //January is 0!
        var yyyy = this._end.getFullYear();
        return `${dd}/${mm}/${yyyy}`
    }

    set start(value: string) {
        this.start = value
    }

    set end(value: string) {
        this.end = value
    }
}