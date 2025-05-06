//src\components\SidebarComponents.tsx

const SidebarComponents: React.FC = () => {
    return (
        <nav>
            <ul className="space-y-2">
                <li>
                    <a href="#home" className="text-blue-600 hover:underline">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-blue-600 hover:underline">
                        Promos Televisiones
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-blue-600 hover:underline">
                        Promos Barras
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-blue-600 hover:underline">
                        Promos Tarjetas ECI
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SidebarComponents;
