

export default function FormManager(formToRender) {

    let form = "";
    console.log(formToRender);

    switch (formToRender.formToRender) {
        case 0:
            form = <p>stock report</p>;
            break;
        case 1:
            form = <p>sales report</p>;
            break;
        case 2:
            form = <p>medicine report</p>;
            break;
        case 3:
            form = <p>order report</p>;
            break;
        case 4:
            form = <p>data report</p>;
            break;
        case 5:
            form = <p>add med</p>;
            break;
        case 6:
            form = <p>update med</p>;
            break;
        case 7:
            form = <p>remove med</p>;
            break;
        case 8:
            form = <p>view report</p>;
            break;
        case 99:
            form = <p>Admin Dashboard</p>
            break;
        default:
            form = <p>Oopsy doopsy there was a fucky wucky UwU :(</p>
            break;
    }

    return (form);
}