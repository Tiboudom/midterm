function createTable(input) {
    let res = '<p>Times Table - ' + input + 'x' + input + '</p><table class="center">';
    for (let i = 0; i <= input; i = i + 1) {
        res = res + '<tr>';
        for (let j = 0; j <= input; j = j + 1) {
            if (i === 0) {
                res = res + '<th style="background-color: yellow; font-weight: bold;">' + j + '</th>';
            } else if (j === 0) {
                res = res + '<th style="background-color: yellow; font-weight: bold;">' + i + '</th>';
            } else if (i === j) {
                    res = res + '<td style="background-color: yellow; font-weight: bold; border-style: solid;">' + (i * j) + '</td>';
            } else {
                    res = res + '<td style="border-style: solid";>' + (i * j) + '</td>';
            }
        }
        res = res + '</tr>';
    }
    res = res + '</table>';
    return res;
}

document.getElementById("error").hidden=true;

let input = prompt("Enter input:");

if (isNaN(input) || input === null || input === undefined || input.length === 0) {
    document.getElementById("error").hidden=false;
} else {
    input = input * 1;
    if (input < 5 || input > 20) {
        document.getElementById("error").hidden=false;
    } else {
        let table = createTable(input);
        document.getElementById("title").innerHTML = table;
    }
}