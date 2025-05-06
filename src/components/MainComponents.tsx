const MainComponents: React.FC = () => {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Selecciona el mes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {months.map((month, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        {month}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MainComponents;