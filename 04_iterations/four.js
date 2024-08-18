const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js','cpp','py','rb']

for(const key in programming){
    // console.log(`key:${key}, value:${programming[key]}`);
}


const map = new Map()
map.set('IN', "INDIA");
map.set('USA', "America");
map.set('FR', "France");
map.set('IN', "India");

for(const key in map){
    // console.log(key);   //maps cannot be itterated this will give no output
}