import { Provider } from "react-redux";
import { store } from './Store/Store'
import ImageContainer from "./Slider/ImageContainer";
import NextPage from "./Slider/NextPage";
import PreviousPage from './Slider/PreviousPage'
import Sequence from './Slider/Sequence';
import GetImages from './GetImages'
function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 ">
        <div>
          <GetImages />
        </div>
        <div className="flex items-center justify-center gap-4">
          <PreviousPage />
          <ImageContainer />
          <NextPage />
        </div>
        <div>
          <Sequence />
        </div>
      </div>
    </Provider>
  );
}

export default App;
