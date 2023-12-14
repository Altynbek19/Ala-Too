import {Form, createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import Computer from "../components/Computer.jsx"
import Econom from "../components/Econom.jsx"
import Marketing from "../components/Marketing.jsx"
import Design from "../components/Design.jsx"
import Povtas from "../components/Povtas"
import Welcome from "../components/Welcome.jsx"
import Carousel from "../components/carousel.jsx"
import Authorization from "../components/Authorization.jsx"
import Mission from "../components/Mission.jsx";
import Stud_sovet from "../components/Stud_sovet.jsx";
import V_fund from "../components/V_fund.jsx";
import Dance_club from "../components/dance_club.jsx";
import Music_club from "../components/Music_club.jsx";
import Sport_club from "../components/Sport_club.jsx";
import Forms from "../components/Form.jsx";
import Midterm_exam from "../components/Midterm_exam.jsx";
import Final_exam from "../components/Final_exam.jsx";
import Make_up from "../components/Make_up.jsx";
import Password_update from "../components/Password_update.jsx";
import Forget_password from "../components/Forget_password.jsx";
const path = (import.meta.env.PROD)? '/project' : ''
  
const router = createBrowserRouter([
  {
    path: `/`,
    element: (
      <div>
        <Header />
        <Welcome />
      </div>
    )
  },
  {
    path: `/computer`,
    element: (
      <div>
        <Header/>
        <Computer />
        <Footer/>
      </div>
    )
  },
  {
    path: `/carousel`,
    element: (
      <div>
        <Carousel />
      </div>
    )
  },
  {
    path: `/povtas`,
    element: (
      <div>
        <Header />
        <Povtas />
        <Footer/>
      </div>
    )
  },
  {
    path: `/econom`,
    element: (
      <div>
        <Header />
        <Econom />
        <Footer/>
      </div>
    )
  },
  {
    path: `/marketing`,
    element: (
      <div>
        <Header />
        <Marketing />
        <Footer/>
      </div>
    )
  },
  {
    path: `/authorization`,
    element: (
      <div>
        <Authorization />
      </div>
    )
  },
  {
    path: `/forget_pass`,
    element: (
      <div>
        <Forget_password />
      </div>
    )
  },
  {
    path: `/pass_update`,
    element: (
      <div>
        <Password_update />
      </div>
    )
  },
  {
    path: `/design`,
    element: (
      <div>
        <Header />
        <Design />
        <Footer/>
      </div>
    )
  },
  {
    path: `/mission`,
    element: (
      <div>
        <Header />
        <Mission />
        <Footer/>
      </div>
    )
  },
  {
    path: `/stud_sovet`,
    element: (
      <div>
        <Header />
        <Stud_sovet />
        <Footer/>
      </div>
    )
  },
  {
    path: `/v_fund`,
    element: (
      <div>
        <Header />
        <V_fund />
        <Footer/>
      </div>
    )
  },
  {
    path: `/dance_club`,
    element: (
      <div>
        <Header />
        <Dance_club />
        <Footer/>
      </div>
    )
  },
  {
    path: `/music_club`,
    element: (
      <div>
        <Header />
        <Music_club />
        <Footer/>
      </div>
    )
  },
  {
    path: `/sport_club`,
    element: (
      <div>
        <Header />
        <Sport_club />
        <Footer/>
      </div>
    )
  },
  {
    path: `/form`,
    element: (
      <div>
        <Header />
        <Forms />
        <Footer/>
      </div>
    )
  },
  {
    path: `/midterm`,
    element: (
      <div>
        <Header />
        <Midterm_exam />
        <Footer/>
      </div>
    )
  },
  {
    path: `/final`,
    element: (
      <div>
        <Header />
        <Final_exam />
        <Footer/>
      </div>
    )
  },
  {
    path: `/make_up`,
    element: (
      <div>
        <Header />
        <Make_up />
        <Footer/>
      </div>
    )
  },
]);

export default router;