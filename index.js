function saturdayFun (activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
console.log(saturdayFun("bathe my dog"));

function mondayWork (task = 'go to the office'){
    return `This Monday, I will ${task}.`
}

mondayWork();
console.log(mondayWork("work from home"));


function wrapAdjective(para = "*"){
    const name = function(adj = "special"){
        return `You are ${para}${adj}${para}!`;
    };
    return name;
}

wrapAdjective('*') ("special");


