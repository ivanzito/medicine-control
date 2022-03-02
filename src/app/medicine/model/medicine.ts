

export class Medicine {
    name: string
    dosage: string
    boxQuantity:number
    amountPaid:number
    startTreatment:Date
    endTreatment:Date

    constructor(name: string, dosage: string, boxQuantity:number, amountPaid:number, startTreatment:Date, endTreatment:Date){
        this.name = name
        this.dosage = dosage
        this.boxQuantity = boxQuantity
        this.amountPaid = amountPaid
        this.startTreatment = startTreatment
        this.endTreatment = endTreatment
    }

    startTreatmentFormatted(): string {
        var dd = String(this.startTreatment.getDate()).padStart(2, '0');
        var mm = String(this.startTreatment.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.startTreatment.getFullYear();
        return `${dd}/${mm}/${yyyy}`
    }
}