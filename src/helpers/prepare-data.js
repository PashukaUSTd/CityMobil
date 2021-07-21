function prepareData(data, tariffsList) {
    const setData = [];

    data.forEach(element => {
        const obj = {};
        let result;
        obj.markAndModel = element.mark + ' ' + element.model;

        if (typeof element.tariffs === 'object') {
            result = setTariffs(obj, element, tariffsList);
        }
        setData.push(result);
    });

    function setTariffs(obj, car, tariffsList) {
        let carTariffs = Object.keys(car.tariffs);

        tariffsList.forEach(tariff => {
            carTariffs.forEach(element => {
                if (tariff === element) {
                    obj[tariff] = car.tariffs[tariff].year;
                } else {
                    if (obj[tariff] === undefined) {
                        obj[tariff] = '-';
                    }
                }
            });
        });

        return obj;
    }

    return setData;
}

export default prepareData;