/**
 * Created by Oliver on 2016-08-03 0003.
 */
export class TadPanel {

    private widgetRegistry = {};
    private id:string = "";
    private parentId :string = "";
    private tadId:string ="";

    constructor(tadId: string, parentId: string, id:string) {

        this.tadId =tadId;
        this.parentId=parentId;
        this.id = id;

    }

    public registerWidget(id:string,widget : any):void {
        this.widgetRegistry[id] = widget;
    }

    public getWidget(id:string){
        return this.widgetRegistry[id];
    }

    public start():void{
        
    }

}