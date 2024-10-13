import {Patient} from "../types";
import PatientDetailItem from "./PatientDetailItem.tsx";
import {usePatientStore} from "../store.ts";

type PatientDetails = {
    patient: Patient
}
export default function PatientDetails({patient}: PatientDetails) {
    const { deletePatient, getPatientById } = usePatientStore();
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label={'ID'} value={patient.id}/>
            <PatientDetailItem label={'Name'} value={patient.name}/>
            <PatientDetailItem label={'Email'} value={patient.email}/>
            <PatientDetailItem label={'Propietario'} value={patient.caretaker}/>
            <PatientDetailItem label={'Date'} value={patient.date.toString()}/>
            <div className={'flex justify-between mt-10'}>
                <button className={'py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg'}
                    onClick={() => getPatientById(patient.id)}
                >
                    Editar
                </button>
                <button className={'py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg'}
                    onClick={() => deletePatient(patient.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}