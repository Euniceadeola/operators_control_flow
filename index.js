// Question 3
let school = 'Greenfield_High _School'
let science = 'Chemistry, Physics, Biology, Technical Drawing'
let Social_sciences = 'Accounting, Commerce, Marketing, Geography'
let Arts= 'Government, Economics, Literature, History'
let General_subjects= 'English, Mathmatics'
let Dept = Arts
if (Dept == science){
    console.log("science subjects:" + science +" " +  General_subjects)
}
if (Dept == Social_sciences){
    console.log("social sciences subjects:" + Social_sciences + " " +  General_subjects )
}

else if (Dept = Arts){
    console.log("Arts subjects:" + Arts + " " +  General_subjects )
}
else {
    console.log("General_subjects" )
}

// Question 4
for (let i = 1; i < 20; i += 7) {
    console.log(i);
}

// Question 5
let Num = 200;
5 ** 2;
5 ** 3;
5 ** 4;
let pwr = 5 ** 3;
console.log( "The number " + pwr + "is the power of 2 nearest to " + Num )