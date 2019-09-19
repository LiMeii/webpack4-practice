
// import { cube } from "./shared/common-utility";
// console.log("the result for cube(5) is " + cube(5));


const https = require('https');
import { getGitUser, countGitUser } from "./shared/getGitUser";


// ----------------------------------
// ---- generator practice start ----
// ----------------------------------
function* gen() {
    let value = yield getGitUser("limeii");
    yield countGitUser({ total_count: 1233 });
    console.log('DONE!!!');

}

var g = gen();
g.next().value.then(data => {
    console.log('the first yeild: ' + data);
}).then(
    g.next().value.then((data) => {
        console.log('the second yeild: ' + data);
    })
).catch((error) => {
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