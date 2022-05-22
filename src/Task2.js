const test = 
{
    name: 'Megaport',
    address: {
        office: {
            unit: 'Level 3',
            street: '825 Ann Street',
            suburb: 'Fortitude Valley',
            city: 'Brisbane',
            state: 'Queensland',
            postcode: 4006,
        },
    },
    industry: {
        type: 'Internet and telecommunications',
        asxListed: true,
    },
}

const getPropertyValue = (path,obj) => {
    if (path && obj) {
        let pathArray = path.split('.');
        var finalPropertyValue = null;
        for (let key of pathArray) {
            finalPropertyValue = finalPropertyValue === null ? obj[key] : finalPropertyValue[key];
            if (!finalPropertyValue) {
          	    finalPropertyValue = 'Invalid path';
          	    break;
            }
        }
        return finalPropertyValue;
    } else {
        return "Path or obj value is missing";
    }
};

console.log(getPropertyValue('address.office.suburb',test));