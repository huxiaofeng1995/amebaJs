/**
 * Created by Oliver on 2016-08-03 0003.
 */
import {TadPanel} from "./TadPanel";

export class Tad {

    private id:string = "";
    private panels = {};

    constructor(id:string) {
        this.id = id;
    }

    public addPanel(id:string, panel:TadPanel):void  {
        this.panels[id] = panel;
    }

    public getPanel(id:string):TadPanel {
        return this.panels[id];
    }

    public start():void {
        //0.创建DM

        //1.启动流程
    }
}