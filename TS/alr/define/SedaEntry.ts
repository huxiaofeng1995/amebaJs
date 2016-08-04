import {AbstractSedaEntry} from "./AbstractSedaEntry";

class SedaEntry {
    private listAbstractEntry: Array<AbstractSedaEntry>;
    
    public getListAbstractEntry(): Array<AbstractSedaEntry> {
        return this.listAbstractEntry;
    }

    public setListAbstractEntry(listAbstractEntry: Array<AbstractSedaEntry>): void {
        this.listAbstractEntry = listAbstractEntry;
    } 
}

export {SedaEntry};