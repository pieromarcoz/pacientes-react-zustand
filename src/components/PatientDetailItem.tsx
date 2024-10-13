type PatientDetailItem = {
    label: string
    value: string
}
export default function PatientDetailItem({label, value}: PatientDetailItem) {
    return (
        <p className={'font-black mb-3 text-gray-700 uppercase text-start'}>{label} : {''}
            <span className={'font-normal normal-case'}>{value}</span>
        </p>
    )
}