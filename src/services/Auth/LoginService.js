

export function loginUser(data) {

    /* uncomment to dynamically log in
    let fetchUri="http://localhost:8080/login?id=" + data[0] + "&password=" + data[1];

    const response = await fetch(fetchUri, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then((response) => response);

    console.log(response);
    */

    if(data[0] === "user" && data[1] === "user_password") {
        return "/dashboard";
    }

    if(data[0] === "admin" && data[1] === "admin_password") {
        return "/admin";
    }
}