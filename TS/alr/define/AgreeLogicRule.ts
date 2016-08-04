import {HashMap} from "../../lib/HashMap";

class AgreeLogicRule {
    private componentElementMap: HashMap = new HashMap();
    private endValueMap: HashMap = new HashMap();
    private nodesList: Array<Object>;
    private path: string;
    private startNodeId: string;
    private varMap: HashMap;
    private lanes: Array<Lane> = new Array();
}