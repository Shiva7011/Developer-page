// 1️⃣ IMPORTS – sabse upar
import Meteors from "@/components/ui/meteors";
import GridBox from "@/components/GridBox";
import HeroButton from "@/components/HeroButton";
import shubhamImg from "@/assets/images/shubham.jpeg";
import shivaImg from "@/assets/images/shivaimage.jpeg";
import bhulvaImg from "@/assets/images/bhulva.png";
import gaganImg from "@/assets/images/gagan.png";
import { useNavigate } from "react-router-dom";
import "@/assets/css/home-text.css";


// 2️⃣ YAHAN GridBackground likho (function se pehle)
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};


// 3️⃣ AB Home component
export default function Home() {
      const navigate = useNavigate();
  return (
    <main className="relative min-h-screen bg-[#020617] overflow-hidden">

      {/* BACKGROUND */}
      <GridBackground />
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={10} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">

  {/* INNER WRAPPER */}
 <div className="w-full max-w-[1400px] px-6 sm:px-12 lg:px-20 flex flex-col">


    <h2 className="pt-[20px] text-3xl sm:text-4xl font-semibold text-white mb-4">
  Meet the {" "}
  <span className="gradient-text">
    Developer
  </span>
</h2>


    {/* PARAGRAPH */}
    <p className="home-description  mb-16">
      This project has been developed by our team of four developers,
       with each member contributing to the design, development, and implementation of the system.
        Through effective collaboration and division of responsibilities, we ensured that the final solution is robust,
         efficient, and well structured.
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 place-items-center">

<GridBox title="Project Lead" image={shubhamImg} name="Shubham Saxena">
  <HeroButton
    size="sm"
    label="Know More"
    onClick={() => navigate("/shubhamhero")}   // 👈 YAHI REDIRECT
  />
</GridBox>


<GridBox title="Team Member" image={shivaImg} name="Shiva Singh">
  <HeroButton
    label="Know More"
    onClick={() =>  navigate("/shivahero")}
  />
</GridBox>

<GridBox title="Team Member" image={bhulvaImg} name="Shubham Kumar">
  <HeroButton
    label="Know More"
    onClick={() =>  navigate("/bhulvahero")}
  />
</GridBox>

<GridBox title="Team Member" image={gaganImg} name="Gagan Kumar">
  <HeroButton
    label="Know More"
    onClick={() => navigate("/gaganhero")}
  />
</GridBox>
    </div> {/* grid */}
    <br></br>
    {/* 👇 PARAGRAPH BELOW GRID */}
<p className="home-description home-description-bottom">
  Through effective teamwork and clear division of responsibilities, the
  development team focused on building a high-quality application that meets
  technical standards and user requirements. The combined efforts of the
  developers demonstrate professionalism, technical competence, and a
  commitment to excellence.
<br></br>
<br></br>
 <div className="text-white space-y-4">

  {/* ABOUT THE PROJECT HEADING */}
  <h2 className="text-2xl md:text-3xl font-bold">
    About The Project
  </h2>

  {/* ABOUT TEXT */}
  <p>
    This project is a full-stack web application built using modern technologies
    to deliver a scalable, secure, and interactive platform. The frontend is
    developed with React, TypeScript, and Vite, providing a responsive and
    user-friendly interface.
  </p>

  <p>
    The backend combines Node.js with Express.js and Java Spring Boot REST APIs,
    following a service-oriented architecture to handle authentication, data
    processing, and business logic. MongoDB and Redis are used for data storage
    and caching, while WebSockets enable real-time updates.
  </p>

  <p>
    The application is deployed using cloud infrastructure and CI/CD practices
    to ensure performance, reliability, and maintainability.
  </p>

  {/* KEY FEATURES HEADING */}
  <h3 className="text-xl md:text-2xl font-semibold pt-4">
    Key Features
  </h3>

  {/* FEATURES LIST */}
  <ul className="list-disc list-inside space-y-2">
    <li><b>Problem of the Day (POTD):</b> Encourages daily practice and consistent skill development.</li>
    <li><b>Private Chat System:</b> Allows secure one-to-one communication between users.</li>
    <li><b>Private Game Rooms:</b> Users can create and join game sessions using unique private keys.</li>
    <li><b>User Progress Tracking:</b> Displays daily growth, performance metrics, and activity insights.</li>
    <li><b>Support & Help Desk:</b> Dedicated module to handle user queries and technical issues.</li>
    <li><b>Real-Time Interaction:</b> Enables live updates and smooth communication across features.</li>
    <li><b>Secure & Scalable Architecture:</b> Designed with a focus on performance, reliability, and data security.</li>
  </ul>
  <p className="pt-6 text-gray-300 italic">
  “Every line of code reflects collaboration, problem-solving, and a shared vision to create meaningful technology.”
</p>


</div>
</p>
<br></br>
<br></br>
  </div>   {/* inner wrapper */}
</div>     {/* content */}

    </main>
  );
}
