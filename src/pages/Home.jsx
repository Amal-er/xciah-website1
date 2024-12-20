import React from "react";
import Header from "../components/Header";
import home1 from "../assets/images/home1.png";
import marketing from "../assets/images/megaphone.png";
import saas from "../assets/images/idea.png";
import service from "../assets/images/vehicle.png";
import content from "../assets/images/writer.png";
import operations from "../assets/images/cogwheel.png";
import girl from "../assets/images/girl.jpg";
import computer from "../assets/images/computer.jpg";
import discussion from "../assets/images/discussion.jpg";
import pen from "../assets/images/pen.jpg";
import { useState, useEffect } from "react";
import tab1 from "../assets/images/tab1.png";
import tab2 from "../assets/images/tab2.png";
import tab3 from "../assets/images/tab3.png";
import tab4 from "../assets/images/tab4.png";
import tab5 from "../assets/images/tab5.png";
import tab6 from "../assets/images/tab6.png";
import tab7 from "../assets/images/tab7.png";
import tab8 from "../assets/images/tab8.png";
import tab9 from "../assets/images/tab9.png";
import tab10 from "../assets/images/tab10.png";
import tab11 from "../assets/images/tab11.png";
import tab12 from "../assets/images/tab12.png";
// -----------------------------------------
import talent from "../assets/images/talent.png";
import analytics from "../assets/images/analytics.png";
import communication from "../assets/images/communication.png";
import management from "../assets/images/management.png";
import phone from "../assets/images/phone.png";
import learning from "../assets/images/study.png";

// --------------------------------------------
import rating from "../assets/images/rating.png";
import customer from "../assets/images/customersatisfaction.png";
import handshake from "../assets/images/handshake.png";
import excellent from "../assets/images/excellent.png";

// ----------------------------------------------
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";

function Home() {
  const cards = [
    {
      id: 1,
      title: "1.Applicant Tracking",
      description:
        "Aenean vel suspendisse, massa eros elit ac nullam at. Placerat blandit mattis nibh luctus..",
      image: girl,
      price: "$20",
    },
    {
      id: 2,
      title: "2.Efficient Scheduling",
      description:
        "Ultrices fringilla ultrices suscipit tincidunt auctor magna. Tortor semper sodales blandit.",
      image: computer,
      price: "$30",
    },
    {
      id: 3,
      title: "3.Performance Enhancement",
      description:
        "Magna quisque fusce at vel vestibulum fusce vehicula quisque. Nam nascetur hac fringilla..",
      image: discussion,
      price: "$40",
    },
    {
      id: 4,
      title: "Comprehensive learning",
      description:
        "Hac tincidunt ornare, cubilia suscipit torquent nostra. Vulputate lectus proin natoque.",
      image: pen,
      price: "$50",
    },
  ];

  // --------------------------------------
  const [activeTab, setActiveTab] = useState("Talent Management Software");

  const tabIcons = {
    "Talent Management Software": talent,
    "Analytics Platform": analytics,
    "Communication Software": communication,
    "Management Software": management,
    "Phone System Software": phone,
    "Learning Management ": learning,
  };

  const tabContent = {
    "Talent Management Software": {
      title: "Talent Management Software",
      description:
        "Sapien urna sollicitudin tortor quam varius sem. Interdum rhoncus tortor malesuada sed himenaeos molestie faucibus. Quisque volutpat, tellus vitae aliquam accumsan, mi neque sagittis nibh, vel viverra ex purus non quam. Quisque aliquet varius iaculis. Integer iaculis, nisi eu convallis sodales..",
      image: tab1, // Replace with your image path
      additionalBoxes: [
        {
          title: "Recruitment Tools",
          description:
            "Leo sociosqu congue maecenas non phasellus aliquam ad.Fames nulla volutpat sollicitudin.",
          image: tab2, // Replace with your image path
        },
        {
          title: "Onboarding System",
          description:
            "Seamlessly onboard new hires with interactive and efficient onboarding solutions.",
          image: tab3, // Replace with your image path
        },
        {
          title: "Employee Development",
          description:
            "Eleifend posuere suscipit sociosqu dignissim dis parturient montes, nascetur ridiculus mus. Phasellus congue quis ligula a tempor.",
          image: tab4, // Replace with your image path
        },
      ],
    },
    "Analytics Platform": {
      title: "Analytics Platform",
      description:
        "Make data-driven decisions with robust analytics and actionable insights.",
      image: tab5, // Replace with your image path
      additionalBoxes: [
        {
          title: "Recruitment ",
          description: "Find the best talent with AI-driven recruitment tools.",
          image: tab6, // Replace with your image path
        },
        {
          title: "Onboarding ",
          description:
            "Seamlessly onboard new hires with interactive and efficient onboarding solutions.",
          image: tab7, // Replace with your image path
        },
        {
          title: "Employee ",
          description:
            "Enhance skill growth with personalized employee development plans.",
          image: tab8, // Replace with your image path
        },
      ],
    },
    "Communication Software": {
      title: "Communication Software",
      description:
        "Enhance team collaboration with secure, real-time communication tools.",
      image: tab9, // Replace with your image path
      additionalBoxes: [
        {
          title: "Recr",
          description: "Find the best talent with AI-driven recruitment tools.",
          image: tab10, // Replace with your image path
        },
        {
          title: "Onboar",
          description:
            "Seamlessly onboard new hires with interactive and efficient onboarding solutions.",
          image: tab11, // Replace with your image path
        },
        {
          title: "Empl",
          description:
            "Enhance skill growth with personalized employee development plans.",
          image: tab12, // Replace with your image path
        },
      ],
    },
    "Management Software": {
      title: "Management Software",
      description:
        "Optimize project planning and execution with intuitive management solutions.",
      image: tab1, // Replace with your image path
      additionalBoxes: [
        {
          title: "Re",
          description: "Find the best talent with AI-driven recruitment tools.",
          image: tab2, // Replace with your image path
        },
        {
          title: "On",
          description:
            "Seamlessly onboard new hires with interactive and efficient onboarding solutions.",
          image: tab3, // Replace with your image path
        },
        {
          title: "Em",
          description:
            "Enhance skill growth with personalized employee development plans.",
          image: tab4, // Replace with your image path
        },
      ],
    },
    "Phone System Software": {
      title: "Phone System Software",
      description:
        "Streamline your hiring, onboarding, and employee development processes with cutting-edge solutions.",
      image: tab1, // Replace with your image path
      additionalBoxes: [
        {
          title: "Recruitment Tools",
          description: "Find the best talent with AI-driven recruitment tools.",
          image: tab2, // Replace with your image path
        },
        {
          title: "Onboarding System",
          description:
            "Seamlessly onboard new hires with interactive and efficient onboarding solutions.",
          image: tab3, // Replace with your image path
        },
        {
          title: "Employee Development",
          description:
            "Enhance skill growth with personalized employee development plans.",
          image: tab4, // Replace with your image path
        },
      ],
    },
    "Learning Management ": {
      title: "Learning Management",
      description:
        "Streamline your hiring, onboarding, and employee development processes with cutting-edge solutions.",
      image: tab1, // Replace with your image path
      additionalBoxes: [
        {
          title: "Recruitment Tools",
          description: "Find the best talent with AI-driven recruitment tools.",
          image: tab2, // Replace with your image path
        },
        {
          title: "Onboarding System",
          description:
            "Seamlessly onboard new hires with interactive and efficient onboarding solutions.",
          image: tab3, // Replace with your image path
        },
        {
          title: "Employee Development",
          description:
            "Enhance skill growth with personalized employee development plans.",
          image: tab4, // Replace with your image path
        },
      ],
    },
  };

  // -------------------------------------
  return (
    <>
      <div className="min-h-screen bg-gradient-to-l from-[#fef6ff] via-[#fffaf4] to-[#f3fef6] relative">
        {/* Header */}
        <div className="absolute top-0 left-0 w-full z-10 ">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="relative w-full flex items-center justify-center pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-8 md:px-10 pt-16">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg font-medium text-black uppercase font-instrument leading-loose tracking-wide">
                Worker Empowerment
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-[#37348c] leading-tight font-robotoCondensed">
                Equip Workers With Self-
                <br />
                Service Resource
              </h1>
              <p className="text-gray-600 text-base font-instrument">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>

              {/* Stats Section */}
              <div className="flex items-center space-x-4">
                <div className="bg-[#fff0ff] rounded-lg p-8 text-center border border-b-gray-100">
                  <h1 className="text-6xl font-bold text-[#37348c] font-robotoCondensed">
                    90K+
                  </h1>
                  <p className="text-[#37348c] uppercase text-sm font-instrument">
                    Worldwide Clients
                  </p>
                </div>
                <ul className="space-y-2 text-gray-700 font-robotoCondensed">
                  <li>✅ Innovative Solutions For Growth</li>
                  <li>✅ Achieve Smooth Integration</li>
                  <li>✅ Reduce Operational Costs</li>
                </ul>
              </div>

              {/* CTA Button */}
              <button className="px-6 py-3 bg-[#d6fbfd] text-black font-semibold rounded-full hover:bg-blue-700 font-instrument ">
                Get Started
              </button>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center">
              <img src={home1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------second div------------------------------------------ */}
      <div className="bg-white py-16 px-8">
        <p className="text-center text-base font-normal text-black mb-8 capitalize leading-loose tracking-wide font-instrument">
          OPERATIONS WITH CUTTING-EDGE
        </p>

        <h1 className="md:text-center md:text-5xl text-[#37348c] mb-12 font-bold md:px-72 font-robotoCondensed text-center ">
          Make Your Company's Future More Promising With Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Box 1 */}
          <div className="bg-[#fef6ff] rounded-xl border b-gray-500 shadow-md text-center p-5">
            <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
              <img className="w-24" src={marketing} alt="" />
              {/* Replace with a real icon */}
            </div>
            <h3 className="font-semibold text-lg text-[#37348c] font-robotoCondensed">
              Saas Marketing
            </h3>
          </div>

          {/* Box 2 */}
          <div className="bg-[#fffaf4] rounded-xl border b-gray-500  shadow-md text-center p-5">
            <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
              <img className="w-24" src={saas} alt="" />
              {/* Replace with a real icon */}
            </div>
            <h3 className="font-semibold text-lg text-[#37348c] font-robotoCondensed">
              Saas Hub®
            </h3>
          </div>

          {/* Box 3 */}
          <div className="bg-[#f3fef6] rounded-xl border b-gray-500  shadow-md text-center p-5">
            <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
              <img className="w-24" src={service} alt="" />
            </div>
            <h3 className="font-semibold text-lg text-[#37348c] font-robotoCondensed">
              Saas Service™
            </h3>
          </div>

          {/* Box 4 */}
          <div className="bg-[#ecfbf9] rounded-xl border b-gray-500  shadow-md text-center p-5">
            <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
              <img className="w-24" src={content} alt="" />
              {/* Replace with a real icon */}
            </div>
            <h3 className="font-semibold text-lg text-[#37348c] font-robotoCondensed">
              Saas Content®
            </h3>
          </div>

          {/* Box 5 */}
          <div className="bg-[#e9f6ff] rounded-xl border b-gray-500  shadow-md text-center p-5">
            <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
              <img className="w-24" src={operations} alt="" />
              {/* Replace with a real icon */}
            </div>
            <h3 className="font-semibold text-lg text-[#37348c] font-robotoCondensed">
              Saas Operations™
            </h3>
          </div>
        </div>
        <p className="text-center md:py-12 py-12 md:px-36 font-instrument text-[#444444]">
          Nam auctor, velit nec efficitur sollicitudin, risus mi malesuada
          magna, a consectetur purus mauris non lectus. Proin lacinia, arcu non
          volutpat, lectus metus laoreet augue, at ultricies lorem tortor sit
          amet purus. Nulla facilisi. Maecenas bibendum purus quis magna
          lacinia, a pharetra metus accumsan. Cras imperdiet efficitur suscipit.
          Integer ac lectus sed ipsum efficitur auctor id vel ligula.
        </p>
        <div className="text-center mt-12 flex justify-center items-center">
          <button className="px-8 py-3 bg-[#d6fbfd] text-black rounded-full font-semibold shadow-md hover:bg-blue-700 font-instrument">
            Get Started
          </button>
          <button className="ml-4 px-8 py-3 bg-gray-100 text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-200">
            Request Demo →
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <hr className="w-[90%]" />
      </div>

      {/* ---------------------------------------third section------------------------------------------ */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row py-10 justify-center items-center gap-5">
          <button className="w-64 h-16 bg-gradient-to-l from-[#fef6ff] via-[#fffaf4] to-[#f3fef6] p-5 border bg-gray-100 rounded-lg text-[#37348c] text-xl font-bold flex items-center justify-center">
            Workforce Management
          </button>
          <button className="w-64 h-16 p-5 border rounded-lg text-[#37348c] text-xl font-bold flex items-center justify-center">
            Premium Features
          </button>
          <button className="w-64 h-16 p-5 border rounded-lg text-[#37348c] text-xl font-bold flex items-center justify-center">
            Cutting-Edge Tools
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {cards.map((card) => (
            <div
              key={card.id}
              className=" shadow-md  overflow-hidden hover:shadow-lg transition-shadow duration-300 "
            >
              {/* Image */}
              <div className="py-2  rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="p-4  ">
                <h3 className="text-xl font-bold text-[#37348c] mb-2 font-robotoCondensed">
                  {card.title}
                </h3>
                <p className="text-[#444444] text-base font-instrument">
                  {card.description}
                </p>
              </div>
              <div className="py-4 px-5">
                <button className="text-[#37348c] font-robotoCondensed font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="min-h-screen bg-gradient-to-l from-[#fef6ff] via-[#fffaf4] to-[#f3fef6] md:py-14">
        <div className="flex flex-col md:flex-row w-full md:p-12 gap-3">
          <div className="w-full md:w-[50%] flex flex-col justify-left items-left text-center md:text-left px-5">
            <p className="text-lg font-medium text-black uppercase text-left font-instrument leading-loose tracking-wide ">
              Our Integrations
            </p>
            <h1 className="text-3xl text-left md:text-5xl font-bold text-[#37348c] leading-tight font-robotoCondensed md:py-3">
              Revolutionize your processes with our innovative software.
            </h1>
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:px-10 md:pt-10 text-center md:text-left">
            <p className="mb-4 px-5 text-justify">
              Curabitur finibus odio ac lectus semper vestibulum sit amet vel
              ligula. Pellentesque posuere diam id ultrices cursus. Integer
              ipsum arcu, rutrum ac quam quis.
            </p>
            <button className="px-6 py-2 bg-[#37348c] text-white rounded-md hover:bg-[#292570]">
              Get started
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-full flex flex-col md:flex-row items-start pt-10 px-8 md:px-10  gap-5">
          {/* Tabs Section */}
          <div className="w-full md:w-[40%] flex flex-col  mb-8 md:mb-0 md:mt-5 ">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`text-left px-4 py-3 rounded-lg md:py-12 md:px-16  font-extrabold text-xl font-robotoCondensed border-b-2 border-gray-200 ${
                  activeTab === tab
                    ? " text-[#312d89] "
                    : "bg-transparent text-[#312d89]"
                } hover:bg-[#f7f7f7] transition`}
                onClick={() => setActiveTab(tab)}
              >
                <img
                  src={tabIcons[tab]} // Use the icon corresponding to the tab
                  alt={`${tab} icon`}
                  className="inline-block  w-10  " // Add size and spacing for the icon
                />
                {tab} →
              </button>
            ))}
          </div>

          {/* Dynamic Content Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* First Box */}
            <div className="col-span-1 md:col-span-2  bg-[#fff0ff] flex flex-col items-left justify-center rounded-3xl border border-b-gray-100 p-4 md:py-10 gap-5 md:px-10 ">
              <img
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                className="w-40 mt-4 rounded-lg "
              />
              <h2 className="text-3xl font-bold text-[#37348c] mb-2">
                {tabContent[activeTab].title}
              </h2>
              <p className=" text-[#37348c] text-justify">
                {tabContent[activeTab].description}
              </p>
            </div>
            {/* Second Box */}
            <div className=" bg-[#fffae9] flex flex-col items-left justify-center border border-b-gray-100 rounded-3xl p-4 md:py-10 gap-2 md:px-10">
              <img
                src={tabContent[activeTab].additionalBoxes[0].image}
                alt={tabContent[activeTab].additionalBoxes[0].title}
                className="w-40 mt-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-[#37348c] mb-2">
                {tabContent[activeTab].additionalBoxes[0].title}
              </h3>
              <p className="text-left text-[#37348c]">
                {tabContent[activeTab].additionalBoxes[0].description}
              </p>
            </div>
            {/* Third Box */}
            <div className=" bg-[#eafff3] flex flex-col items-left justify-center border border-b-gray-100 rounded-3xl p-4 md:py-10 gap-2 md:px-10">
              <img
                src={tabContent[activeTab].additionalBoxes[1].image}
                alt={tabContent[activeTab].additionalBoxes[1].title}
                className="w-40 mt-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-[#37348c] mb-2">
                {tabContent[activeTab].additionalBoxes[1].title}
              </h3>
              <p className="text-left text-[#37348c]">
                {tabContent[activeTab].additionalBoxes[1].description}
              </p>
            </div>
            {/* Fourth Box */}
            <div className="col-span-1 md:col-span-2  bg-[#edf6ff] flex flex-col rounded-3xl border border-b-gray-100 justify-center items-center  md:py-10">
              <div className="flex justify-center items-center gap-12 md:px-10">
                <div className="">
                  <h3 className="text-2xl  font-semibold text-[#37348c] mb-2">
                    {tabContent[activeTab].additionalBoxes[2].title}
                  </h3>
                  <p className="text-left text-[#37348c]">
                    {tabContent[activeTab].additionalBoxes[2].description}
                  </p>
                </div>
                <div>
                  <img
                    src={tabContent[activeTab].additionalBoxes[2].image}
                    alt={tabContent[activeTab].additionalBoxes[2].title}
                    className="w-40 mt-4 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------client Appraisals------------------------------------- */}
      <div className="bg-white pt-12 px-8">
        <p className="text-center text-base font-medium text-gray-600 mb-4 tracking-wide uppercase">
          Client Appraisals
        </p>

        <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#37348c] mb-8">
          International Clients Offer Their Insights
        </h1>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-12">
          Phasellus lectus himenaeos sollicitudin maecenas molestie per
          senectus. Cursus ipsum velit, inceptos turpis dignissim hac vivamus.
          Ornare aliquet a eget litora habitant augue habitasse pretium.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Box 1 */}
          <div className=" flex flex-col justify-center items-center  p-6">
            <img src={rating} className="w-28" alt="" />
            <h3 className="font-semibold text-lg text-[#37348c] mb-2">
              Client Ratings
            </h3>
          </div>

          {/* Box 2 */}
          <div className=" flex flex-col justify-center items-center  p-6">
            <img src={customer} className="w-28" alt="" />
            <h3 className="font-semibold text-lg text-[#37348c] mb-2">
              Customer Satisfaction
            </h3>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col justify-center items-center  p-6">
            <img src={handshake} className="w-28" alt="" />
            <h3 className="font-semibold text-lg text-[#37348c] mb-2">
              Technical Guidance
            </h3>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col justify-center items-center  p-6">
            <img src={excellent} className="w-28" alt="" />
            <h3 className="font-semibold text-lg text-[#37348c] mb-2">
              Excellent Service
            </h3>
          </div>
        </div>
      </div>
      {/* ---------------------------Boxes-------------------------------------- */}

      <div className="relative flex flex-col justify-center">
        {/* Top Box */}
        <div className="flex flex-col justify-center items-center px-4 sm:px-10 md:px-44">
          <div className="flex justify-center w-full md:w-[40%]">
            <div className="absolute z-10 mt-12 sm:mt-28 bg-white border border-gray-200 shadow-md rounded-lg p-6 w-full sm:w-[90%]">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {/* Feature 1 */}
                <div className="p-4 sm:p-6 text-center">
                  <div className="bg-[#c7b9ca] p-4 rounded-full inline-block mb-4">
                    <img
                      className="w-8 h-8"
                      src="path-to-icon1.png"
                      alt="Efficiency icon"
                    />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    Save time and improve efficiency with the best template.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="p-4 sm:p-6 text-center">
                  <div className="bg-[#e6fdf4] p-4 rounded-full inline-block mb-4">
                    <img
                      className="w-8 h-8"
                      src="path-to-icon2.png"
                      alt="Adaptability icon"
                    />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    Effortlessly adjustable and adaptable to your projects.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="p-4 sm:p-6 text-center">
                  <div className="bg-[#e9f6ff] p-4 rounded-full inline-block mb-4">
                    <img
                      className="w-8 h-8"
                      src="path-to-icon3.png"
                      alt="Enterprise icon"
                    />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    Complete a high-quality enterprise project in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 1 */}
        <div className="px-4 sm:px-10">
          <div className="relative top-40 sm:top-60 bg-pink-100 py-5 px-4 sm:px-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-4 sm:mb-6">
                  Effortless Control
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4">
                  Features of Cloud Management App
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start justify-center sm:justify-start">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    Massa a cras maximus vivamus nostra faucibus.
                  </li>
                  <li className="flex items-start justify-center sm:justify-start">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    Facilisis semper ut venenatis rutrum venenatis.
                  </li>
                  <li className="flex items-start justify-center sm:justify-start">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    Taciti congue mauris lacus urna fringilla imperdiet.
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-700">
                  Get Started
                </button>
              </div>
              <div className="pt-6 sm:pt-0 md:pt-16">
                <img
                  className="w-full max-w-[200px] sm:max-w-none"
                  src={frame1}
                  alt="Cloud Management"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------ */}

      <div className="bg-white py-8 px-4 sm:py-16 sm:px-8 md:pt-48">
        <p className="text-center text-sm sm:text-base font-normal text-black mb-4 sm:mb-8 capitalize leading-loose tracking-wide font-instrument">
          OPERATIONS WITH CUTTING-EDGE
        </p>

        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl text-[#37348c] mb-8 sm:mb-12 font-bold sm:px-8 md:px-72 font-robotoCondensed">
          The Story Thus Far
        </h1>

        {/* Timeline Boxes */}
        <div className="bg-white py-8 sm:py-16 px-4 sm:px-8">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 justify-items-center mt-8">
            <div className="bg-[#fffaf4] h-auto sm:h-36 w-full sm:w-[400px] rounded-xl border border-gray-200 shadow-md text-center p-5 flex flex-col justify-center">
              <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
                <img className="w-12 sm:w-16" src={saas} alt="Saas Icon" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-[#37348c] font-robotoCondensed">
                New Market Expansion
              </h3>
              <p className="text-sm mt-2">2001</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center mt-8">
            <div className="bg-[#fffaf4] h-auto sm:h-36 w-full sm:w-[400px] rounded-xl border border-gray-200 shadow-md text-center p-5 flex flex-col justify-center">
              <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
                <img className="w-12 sm:w-16" src={saas} alt="Saas Icon" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-[#37348c] font-robotoCondensed">
                New Market Expansion
              </h3>
              <p className="text-sm mt-2">2001</p>
            </div>
            <div className="bg-[#f3fef6] h-auto sm:h-36 w-full sm:w-[400px] rounded-xl border border-gray-200 shadow-md text-center p-5 flex flex-col justify-center">
              <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
                <img
                  className="w-12 sm:w-16"
                  src={service}
                  alt="Service Icon"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-[#37348c] font-robotoCondensed">
                Geographic Expansion
              </h3>
              <p className="text-sm mt-2">2007</p>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-8">
            <div className="bg-[#ecfbf9] h-auto sm:h-36 w-full sm:w-[400px] rounded-xl border border-gray-200 shadow-md text-center p-5 flex flex-col justify-center">
              <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
                <img
                  className="w-12 sm:w-16"
                  src={content}
                  alt="Content Icon"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-[#37348c] font-robotoCondensed">
                Strategic Partnership
              </h3>
              <p className="text-sm mt-2">2010</p>
            </div>
            <div className="bg-[#e9f6ff] h-auto sm:h-36 w-full sm:w-[400px] rounded-xl border border-gray-200 shadow-md text-center p-5 flex flex-col justify-center">
              <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
                <img
                  className="w-12 sm:w-16"
                  src={operations}
                  alt="Operations Icon"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-[#37348c] font-robotoCondensed">
                Achieved New Milestone
              </h3>
              <p className="text-sm mt-2">2015</p>
            </div>
            <div className="bg-[#fef6ff] h-auto sm:h-36 w-full sm:w-[400px] rounded-xl border border-gray-200 shadow-md text-center p-5 flex flex-col justify-center">
              <div className="text-2xl text-[#37348c] mb-4 flex justify-center items-center">
                <img
                  className="w-12 sm:w-16"
                  src={marketing}
                  alt="Marketing Icon"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-[#37348c] font-robotoCondensed">
                The Future Awaits
              </h3>
              <p className="text-sm mt-2">2024</p>
            </div>
          </div>
        </div>

        <p className="text-center py-6 sm:py-12 sm:px-12 md:px-36 font-instrument text-[#444444] text-sm sm:text-base">
          Pellentesque suscipit sagittis sagittis. Duis sed pellentesque justo,
          sit amet sollicitudin sapien. Cras maximus tempor mauris id luctus.
        </p>

        <div className="text-center mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center">
          <button className="px-6 py-3 sm:px-8 sm:py-3 bg-[#d6fbfd] text-black rounded-full font-semibold shadow-md hover:bg-blue-700 font-instrument">
            Get Started
          </button>
          <button className="mt-4 sm:mt-0 sm:ml-4 px-6 py-3 sm:px-8 sm:py-3 bg-gray-100 text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-200">
            Request Demo →
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <hr className="w-[90%]" />
      </div>

      {/* ---------------------------------------------------------------- */}
    </>
  );
}

export default Home;
