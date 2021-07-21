function search(array, req) {
    let secondArray = [];

    array = array.map(element => {
        let values = Object.values(element);
        values = values.filter(el => el.toString().toLowerCase()
            .includes(req.trim().toLowerCase())
        );

        if (values.length > 0) {
            secondArray.push(element);
        }
    })

    return secondArray;
}

export default search;