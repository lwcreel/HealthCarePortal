

export async function loginUser(data) {

    let fetchUri="/login?id=" + data[0] + "&password=" + data[1];

    const response = await fetch(fetchUri, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then((response) => response);

    console.log(response);
}