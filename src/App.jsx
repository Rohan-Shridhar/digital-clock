import DigitalClock from "./DigitalClock.jsx";
import BackgroundChanger from "./BackgroundChanger.jsx";
function App() {
  return (
    <>
      <BackgroundChanger>
            <DigitalClock />
            <footer>
              <p>© 2025 Digital Clock built using React</p>
            </footer>
      </BackgroundChanger>
    </>
  );
}
export default App;
