import AddMedForm from "./Forms/AddMedForm";
import DeleteMedForm from "./Forms/DeleteMedForm";
import ReportForm from "./Forms/ReportForm";
import UpdateMedForm from "./Forms/UpdateMedForm";
import ViewReports from "./ViewReports";


export default function FormManager(formToRender) {

    let form = "";
    console.log(formToRender);

    switch (formToRender.formToRender) {
        case 0:
            form = <ReportForm />;
            break;
        case 1:
            form = <AddMedForm />;
            break;
        case 2:
            form = <UpdateMedForm />;
            break;
        case 3:
            form = <DeleteMedForm />;
            break;
        case 4:
            form = <ViewReports />;
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