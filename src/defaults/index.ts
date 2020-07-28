import { aiInstance, ChildInstance } from "../interfaces/Instance.ts";
//default ai instance
export let DaInstance: aiInstance = {
    round: 0,
    children: []
}
//default child instance
export let DCInstance: ChildInstance = {
    ID: 0,
    die: () => {
        return void null;
    },
    survive: (Parent: aiInstance) => {
        Parent.children.append(this);
        return true
    }
}