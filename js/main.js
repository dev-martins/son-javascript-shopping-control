let list = [{
        "desc": "rice",
        "amount": 1,
        "value": 5.40
    },
    {
        "desc": "beer",
        "amount": 12,
        "value": 1.99
    },
    {
        "desc": "meat",
        "amount": 1,
        "value": 15
    },
];

function getTotal(list) {
    let total = 0;

    for (var key in list) {
        total += list[key].value * list[key].amount;
    }

    return total;
}

function setList(list) {
    let lineTable;
    let index = 0;

    for (const key in list) {
        index += 1
        lineTable += `<tr>
                        <th scope="row">${index}</th>
                        <td>${formatDesc(list[key].desc)}</td>
                        <td>${list[key].amount}</td>
                        <td>${formatValue(list[key].value)}</td>
                        <td><div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Editar</button>
                        <button type="button" class="btn btn-danger">Excluir</button>
                      </div></td>
                    </tr>`;
    }

    document.querySelector('#list-table tbody').innerHTML = lineTable;
}

function formatDesc(desc) {
    let str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    let str = parseFloat(value).toFixed(2) + "";
    str = str.replace('.', ',');
    str = 'R$ ' + str;
    return str;
}

function addData() {
    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    let value = document.getElementById('value').value;

    list.unshift({
        "desc": desc,
        "amount": amount,
        "value": value
    });

    setList(list);
}


setList(list);