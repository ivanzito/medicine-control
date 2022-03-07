import { Treatment } from "./treatment"


export class Medicine {
    name: string
    dosage: string
    boxQuantity:number
    amountPaid:number
    private _treatment:Treatment

    constructor(name: string, dosage: string, boxQuantity:number, amountPaid:number, treatment:Treatment) {
        this.name = name
        this.dosage = dosage
        this.boxQuantity = boxQuantity
        this.amountPaid = amountPaid
        this._treatment = treatment
    }

    get treatment():Treatment {
        return this._treatment
    }
}