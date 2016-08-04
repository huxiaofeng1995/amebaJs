import {HashMap} from "../../lib/HashMap";

class MPTStep {
    private caption: string;
    private description: string;
    private exceptionNext: string;
    private id: string;
    private showId: string;
    private outNextMap: HashMap = new HashMap();

    public constructor() {};

    //-------------------------------------------------adder------------------------------
    public addOutNext(id: string, next: string): void {
        this.outNextMap.put(id, next);
    };
    
    //-------------------------------------------------setter-----------------------------
    public setCaption(caption: string): void {
        this.caption = caption;
    };
    public setDescription(description: string): void {
        this.description = description;
    };
    public setExceptionNext(exceptionNext: string): void {
        this.exceptionNext = exceptionNext;
    };
    public setId(id: string): void {
        this.id = id;
    };
    public setOutNextMap(outNextMap: HashMap): void {
        this.outNextMap = outNextMap;
    };
    public setShowId(showId: string): void {
        this.showId = showId;
    };
    
    //-------------------------------------------------getter-----------------------------
    public getCaption(): string {
        return this.caption;
    };
    public getDescription(): string {
        return this.description;
    };
    public getExceptionNext(): string {
        return this.exceptionNext;
    };
    public getId(): string {
        return this.id;
    };
    public getOutNextMap(): HashMap {
        return this.outNextMap;
    };
    public getShowId(): string {
        return this.showId;
    };
}

export {MPTStep};