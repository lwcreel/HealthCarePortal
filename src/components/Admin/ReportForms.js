

export default function ReportForms(formToRender) {

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
        case 99:
            form = <p>Admin Dashboard</p>
            break;
        default:
            break;
    }

    return (form);
}