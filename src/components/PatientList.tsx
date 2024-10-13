import {usePatientStore} from "../store";
import PatientDetails from "./PatientDetails.tsx";
export default function PatientList() {
    const { patients} = usePatientStore();
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <p className="text-lg mt-5 text-center mb-10">
                {patients.length ? (
                        <>
                            <h2 className={'font-black text-3xl text-center'}>
                                Listado de Pacientes
                            </h2>
                            <p className={'text-xl mt-5 mb-10 text-center'}>
                                Administra tus {''}
                                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                            </p>
                            {
                                patients.map((patient) => (
                                    <PatientDetails
                                        key={patient.id}
                                        patient={patient}
                                    />
                                ))
                            }
                        </>
                    )
                    : (
                        <>
                            <h2 className={'font-black text-3xl text-center'}>
                                No hay Pacientes
                            </h2>
                            <p className={'text-xl mt-5 mb-10 text-center'}>
                                Comienza agregando pacientes {''}
                                <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
                            </p>
                        </>
                    )}
            </p>

        </div>
    )
}