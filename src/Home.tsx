import  React from "react";

interface HomeProps {
    userName: string;
}
const Home: React.FC<HomeProps> = ({userName}) => {
    return (
        <div>
            <h2>Inicio</h2>
            <p>Bienvenido, {userName}</p>
        </div>
    );
}

export default Home;