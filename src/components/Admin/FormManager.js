import DeleteMedForm from "./Forms/DeleteMedForm";
import ReportForm from "./Forms/ReportForm";


export default function FormManager(formToRender) {

    let form = "";
    console.log(formToRender);

    switch (formToRender.formToRender) {
        case 0:
            form = <ReportForm />;
            break;
        case 1:
            form = <p>create med</p>;
            break;
        case 2:
            form = <p>update med</p>;
            break;
        case 3:
            form = <DeleteMedForm />;
            break;
        case 4:
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