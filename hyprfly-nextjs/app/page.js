import ApexChartsCollection from "./components/ApexChartsCollection";
import ColorPicker from "./components/ColorPicker";
import CommentingBox from "./components/CommentingBox";
import CommentsSidebar from "./components/CommentsSidebar";
import Cookies from "./components/Cookies";
import CookiesBox from "./components/CookiesBox";
import DateOption from "./components/DateOption";
import FansChart from "./components/FansChart";
import Navbar from "./components/Navbar";
import NewArtistTeam from "./components/NewArtistTeam";
import NotificationBox from "./components/NotificationBox";
import SupportBox from "./components/SupportBox";
import TeamsNavbar from "./components/TeamsNavbar";
import TeamsSlider from "./components/TeamsSlider";
import UsersDropdown from "./components/UsersDropdown";
import UserSettingsDropdown from "./components/UserSettingsDropdown";

export default function Home() {
  return (
      <main className="min-h-screen w-full">
        <div className="w-full max-w-[1577px] mx-auto">

        <Navbar/>
        <ApexChartsCollection/>


        <div className="w-full bg-white p-11 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Notification (Component 9)</h2>
          <NotificationBox/>
        </div>


        <div className="w-full bg-white p-11 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">(Component 12)</h2>
          <UserSettingsDropdown/>
        </div>

        <div className="w-full bg-white p-11 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Support Box (Component 2)</h2>
          <SupportBox/>
        </div>

        <div className="w-full bg-white p-11 rounded-2xl h-[400px] my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Component 4</h2>
          <UsersDropdown/>
        </div>

        <div className="w-full bg-white p-11 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Color Picker (Component 3)</h2>
          <ColorPicker/>
        </div>

        
        <div className="w-full bg-white p-11 rounded-2xl h-[300px] my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">(Component 6)</h2>
          <DateOption/>
        </div>

        <div className="w-full bg-white p-4 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">(Component 7)</h2>
          <div className="w-full bg-white py-8">
          <TeamsNavbar/>
            <div className="w-full lg:px-8 mt-10" >
          <TeamsSlider/>
            </div>

            <div className="w-full">
              <NewArtistTeam/>          
            </div>
          </div>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Cookies (Component 11)</h2>
          <Cookies/>

          <CookiesBox/>
        </div>

        <div className="w-full bg-white lg:p-8 rounded-2xl p-5 my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Commenting popup (Component 10)</h2>
          <CommentsSidebar/>

          <CommentingBox/>
        </div>

        <div className="w-full bg-white lg:p-8 p-5 rounded-2xl my-8">
          <h2 className="text-lg text-gray-600 font-bold mb-6">Fans (Component 5)</h2>
          <FansChart/>
        </div>

        </div>
      </main>
  );
}
