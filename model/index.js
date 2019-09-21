// Layout DB(name)
const DB = {
    "jerru": {age: 1000, height: 100, alive: true},
    "alex": {age:90000, height:1, alive: false}
};
export default class{
    constructor(name) {
        this.name = name.toLowerCase();
        this.stats = DB[this.name];
    }
}

export function exists(name) {
    return !!DB[name];
}