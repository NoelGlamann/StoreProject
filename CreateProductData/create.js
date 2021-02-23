const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = {};

function takeData() {
    rl.question('ID: ', (id) => {
        rl.question('Name: ', (name) => {
            rl.question('Price: ', (price) => {
                if (id !== "EXPORT") {
                    data[id] = {};
                    data[id].name = name;
                    data[id].price = parseFloat(price);
                    takeData();
                } else {
                    console.log(JSON.stringify(data));
                }
            });
        });
    });
}

takeData();