const out = document.querySelector(".output");
const buttons = document.querySelectorAll(".input");

var stored = 0;
var current = 0;
var operation = null;

buttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        if ( !isNaN(parseInt((e.target.id).replace('n', ''))) ) {
            current = out.innerHTML + (e.target.id).replace('n', '');
            out.innerHTML = current;
            console.log(current);
        } else if ( e.target.id.length === 3) {
            if (isNaN(parseInt(out.innerHTML))) {
                stored = 0;
            } else {
                stored = parseInt(out.innerHTML);
            }
            operation = e.target.id;
            out.innerHTML = "";
            current = 0;
        } else if ( e.target.id === 'eq' && operation !== null) {
            current = parseInt(out.innerHTML);
            if (!current) current = 0;
            out.innerHTML = eq(operation, stored, current);
            current = 0;
            operation = "";
        } else if ( e.target.id === 'ac' ) {
            stored = 0;
            current = 0;
            operation = "";
            out.innerHTML = "";
        } else {
            current = 0
            out.innerHTML = ""
        }
    })
})

const add = (n1, n2) => {
    return n1 + n2;
}

const sub = (n1, n2) => {
    return n1 - n2;
}

const div = (n1, n2) => {
    if (!n2) return "ERROR"
    return n1 / n2;
}

const mul = (n1, n2) => {
    return n1 * n2;
}

const eq = (op, n1, n2) => {
    switch (op) { 
        case "add":
            return add(n1, n2);
        case "sub":
            return sub(n1, n2);
        case "div":
            return div(n1, n2);
        case "mul":
            return mul(n1, n2);
        default:
            return n2;
    }
}