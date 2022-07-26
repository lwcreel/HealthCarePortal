

export default function DataOperationForms (formToRender) {

    let form = "";
    console.log(formToRender);

    switch (formToRender.formToRender) {
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
        default:
            break;
    }

    return (form);
}