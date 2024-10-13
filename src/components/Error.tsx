export default  function Error({children}: {children: React.ReactNode}) {
    return (
        <p className="text-red-500 text-xs italic">
            {children}
        </p>
    )
}