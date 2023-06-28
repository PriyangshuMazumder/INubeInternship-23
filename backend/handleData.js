const { getDefaultNormalizer } = require("@testing-library/react");

function adjustData(data){

    data.section_one.id_number = removeSpecialSpace(data.section_one.id_number);

    if(data.section_three.dob){
        var temp = "";
        temp += data.section_three.dob.substring(0,4);
        temp += data.section_three.dob.substring(5,7);
        temp += data.section_three.dob.substring(8,10);

        data.section_three.dob = temp;
    }
    else{
        data.section_three.dob = "19010101";
    }

    if(!data.section_three.gender){
        data.section_three.gender = "U";
    }
    return data;
}

function removeSpecialSpace(data){
    var temp = "";
    for(var i = 0; i < data.length; i++){
        if(data[i] != "-" && data[i] != "(" && data[i] != ")" && data[i] != " "){
            temp += data[i];
        }
    }   
    return temp;
}

module.exports = {adjustData};