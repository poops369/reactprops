import "./App.css";
import Profile from "./profile/Components/Profile";
import image from "../src/unnamed.jpg";

function App() {
    const handleAlert = (fullName) => {
        alert(fullName);
    };

    return (
        <div className="App">
            <Profile
                fullName="Mahmoud naili"
                Bio="Day dreamer"
                Profession="wind seller"
                handleAlert={handleAlert}
            >
                <img src={image} alt="photo" className="prof" />
            </Profile>
        </div>
    );
}

export default App;
