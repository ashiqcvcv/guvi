function createData() {
    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        country: document.getElementById("country").value
    };
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(data) {
        console.log(data)
    })
}


function readData() {
    var data = {
        name: document.getElementById("read").value,
    }
    fetch("http://localhost:3000/users/read", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(data) {
        console.log(data)
    })
}

function updateData() {
    var data = {
        name: document.getElementById("updateName").value,
        update: document.getElementById("updateInfo").value,
        replace: document.getElementById("replace").value
    }
    fetch("http://localhost:3000/users/update", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(data) {
        console.log(data)
    })
}

function deleteData() {
    var data = {
        name: document.getElementById("delete").value,
    }
    fetch("http://localhost:3000/users", {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(data) {
        console.log(data)
    })
}