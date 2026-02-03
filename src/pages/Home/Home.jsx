// 1️⃣ IMPORTS – sabse upar
import Meteors from "@/components/ui/meteors";
import GridBox from "@/components/GridBox";
import HeroButton from "@/components/HeroButton";
import amitImg from "@/assets/images/amit.jpeg";
import shivaImg from "@/assets/images/shivaimage.jpeg";
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
      This project is a full-stack food ordering platform called FoodieHub,
       built to provide a smooth and modern online dining experience. It focuses on a clean user interface,
        secure backend services, and seamless interaction between customers and restaurants, ensuring the system is efficient, 
        scalable, and user-friendly.
    </p>

    {/* GRID */}
   <div className="flex justify-center items-center gap-40 flex-wrap">
    

<GridBox
  title="Project Lead"  image={shivaImg} name={<span className="font-bold text-lg">Shiva Singh</span>}>

  <HeroButton
    size="sm"
    label="Know More"
    onClick={() => navigate("/shivahero")}   // 👈 YAHI REDIRECT
  />
</GridBox>


<GridBox title="Team Member" image={amitImg} name={<span className="font-bold text-lg">Amit Gupta</span>}> 
  <HeroButton
    label="Know More"
    onClick={() =>  navigate("/shubhamhero")}
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
    FoodieHub is a modern online food ordering web application built using React and Spring Boot. 
    The platform connects restaurants with customers by providing a centralized space where users can explore menus,
    place orders, and manage their food preferences easily.
  </p>

  <p>
    The frontend is developed using React 18, Tailwind CSS, MUI, and Redux, offering a responsive and visually engaging interface. 
    The backend is powered by Spring Boot 3, providing secure REST APIs, authentication, and business logic management. 
    MySQL is used for reliable data storage, while JWT and Spring Security ensure secure and role-based access control.
  </p>

  <p>
    FoodieHub is designed with performance, scalability, and real-world usability in mind,
     making it a strong example of a modern full-stack web application.
  </p>

  {/* KEY FEATURES HEADING */}
  <h3 className="text-xl md:text-2xl font-semibold pt-4">
    Key Features
  </h3>

  {/* FEATURES LIST */}
  <ul className="list-disc list-inside space-y-2">
    <li><span className="font-bold text-lg">Multi-Restaurant Support:</span> Multiple restaurants can register and manage their menus on FoodieHub.</li>

<li><span className="font-bold text-lg">Smart Cart System:</span> Users can add items to cart, remove items, and manage orders easily.</li>

<li><span className="font-bold text-lg">Secure Authentication:</span> JWT-based login, role-based access, and protected APIs for better security.</li>

<li><span className="font-bold text-lg">Online Payment Integration:</span> Secure checkout experience using Stripe payment gateway.</li>

<li><span className="font-bold text-lg">Admin & Restaurant Panels:</span> Separate dashboards for admins and restaurant owners to manage data.</li>

<li><span className="font-bold text-lg">Responsive UI:</span> Built with React, Tailwind, and MUI for a smooth and modern user experience.</li>

<li><span className="font-bold text-lg">Order Tracking & Notifications:</span> Users receive updates about order status and activities.</li>

<li><span className="font-bold text-lg">Scalable Full-Stack Architecture:</span> Developed using React and Spring Boot for performance and reliability.</li>


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
