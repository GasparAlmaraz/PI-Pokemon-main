const filterData = (query, array) => {

    const filteredArray = array.filter(element => {
        console.log(element);
        // const keys = Object.keys(element.dataValues);
        // return keys.some(key => element.dataValues[key] === query);
    });
    return filteredArray;
};

module.exports = filterData;