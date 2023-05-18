const sortNorder = (sort, order, array) => {
    if (sort && order) {
        const sortedArray = array.sort((a, b) => {
            const valueA = a[sort];
            const valueB = b[sort];

            if (typeof valueA === "number" && typeof valueB === "number") {
                // Ordenación numérica
                if (order === "ASC") {
                    return valueA - valueB;
                } else if(order === "DESC") {
                    return valueB - valueA;
                }
            } else {
                // Ordenación alfabética
                if (order === "ASC") {
                    return String(valueA).localeCompare(String(valueB));
                } else if(order === "DESC"){
                    return String(valueB).localeCompare(String(valueA));
                }
            }
        });

        return sortedArray;
    }

    return 0;
}

module.exports = sortNorder;