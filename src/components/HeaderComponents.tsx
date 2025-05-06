import { useState, useEffect } from "react";

const HeaderComponents: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById("sidebar");
            if (menu && !menu.contains(event.target as Node)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Promos Samsung</h1>
            <button
                className="md:hidden bg-blue-500 text-white px-4 py-2 rounded"
                onClick={toggleMenu}
            >
                Menú
            </button>
            {isMenuOpen && (
                <nav
                    id="sidebar"
                    className="absolute top-16 left-0 bg-gray-200 w-64 p-4 shadow-lg z-50"
                >
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#home"
                                className="text-blue-600 hover:underline"
                                onClick={closeMenu}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-blue-600 hover:underline"
                                onClick={closeMenu}
                            >
                                Promos Televisiones
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-blue-600 hover:underline"
                                onClick={closeMenu}
                            >
                                Promos Barras
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-blue-600 hover:underline"
                                onClick={closeMenu}
                            >
                                Promos Tarjetas ECI
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HeaderComponents;