
// import { cube } from "./shared/common-utility";
// console.log("the result for cube(5) is " + cube(5));


const https = require('https');
import { getGitUser, countGitUser, cbGetGitUser } from './shared/getGitUser';

// ----------------------------------
// --------- callback start ---------
// ----------------------------------
cbGetGitUser("limeii");
// ----------------------------------
// --------- callback end ---------
// ----------------------------------


// ----------------------------------
// ---- generator practice start ----
// ----------------------------------
function* gen(value) {
    var result1 = yield getGitUser(value);
    yield countGitUser(result1);
}

var g = gen('limeii');
g.next().value.then(data => {
    console.log('the first yeild: ' + data);
    return data;
}).then(res => {
    g.next(res).value.then((data) => {
        console.log('the second yeild: ' + data);
    })
}).catch((error) => {
    console.log('has error: ' + error);
})
// --------------------------------
// ---- generator practice end ----
// --------------------------------


// ------------------------------------
// ---- asycn await practice start ----
// ------------------------------------
async function test() {
    var value1 = await getGitUser("limeii");
    var value2 = await countGitUser(value1);

    console.log('the first await value ' + value1);
    console.log('the second await value ' + value2);
}
test();
// ------------------------------------
// ---- asycn await practice end ----
// ------------------------------------