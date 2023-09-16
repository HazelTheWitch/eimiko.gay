/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                miko: {
                    100: "#fbedeb",
                    200: "#f8dbd7",
                    300: "#f4c8c3",
                    400: "#f1b6af",
                    500: "#eda49b",
                    600: "#be837c",
                    700: "#8e625d",
                    800: "#5f423e",
                    900: "#2f211f"
                },
                ei: {
                    100: "#d1cfd7",
                    200: "#a29faf",
                    300: "#747086",
                    400: "#45405e",
                    500: "#171036",
                    600: "#120d2b",
                    700: "#0e0a20",
                    800: "#090616",
                    900: "#05030b"
                },
            }
        },
    },
    plugins: [],
}

