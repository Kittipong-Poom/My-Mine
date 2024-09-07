"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const MyProfile: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const images = [
    "https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/414926245_1825828751205543_6644850373182480728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGCQRsEcAmigrSaEwACBvOz5QB9Rbw9bTTlAH1FvD1tNNv_D_EAnV89mdGBL3Ch-PjVuZVicwhyKcobfMEPumir&_nc_ohc=yNdM81hAxZYQ7kNvgGtCEp_&_nc_ht=scontent.fcnx2-1.fna&oh=00_AYDzb2L1d_Uqis08JJxEk5ZSFbVtvJbNJ4GjjAz6PWli-Q&oe=66E1F1C3",
    "https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/414007781_1820143161774102_346561013747724158_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZUPaHRh1xmuXH3UtGrIN9gGhSHQShTvaAaFIdBKFO9q4xxM6If_kQYwhYX_jIrgJ4OAw0IehEnGz5yRPhdzck&_nc_ohc=ok166lbX9s0Q7kNvgHVxbNL&_nc_ht=scontent.fcnx2-1.fna&oh=00_AYBU7fzV2_EiNvQb1NKioq2YcmQto0A5xur6glCFmZSyUQ&oe=66E1C6F7",
    "https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/412294222_1820143085107443_2280633288266275454_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeErSWoIISel5kAm5cu6dqe3q6WlwtD6BEKrpaXC0PoEQv5v63DnXBLttYh8qZPT6pNW_2KFTWKsUIZ4iZQKNw23&_nc_ohc=6YoFBAIpZxEQ7kNvgFkeXii&_nc_ht=scontent.fcnx2-1.fna&oh=00_AYAwagRys_1U_pog-doF-ahvF6ndhZVXXeeC8hau4gw7tQ&oe=66E1EE7E",
    "https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/320225271_685944736253159_8938108210425289217_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcL2jRLWcGmNvxXbeKaxT0sSe8q0X1NpOxJ7yrRfU2k-Q_M7qE9--HAURRPumuo3XuGX8rhZdcCWumjNe50k-c&_nc_ohc=tcjcmDl9vPgQ7kNvgGZB-kX&_nc_ht=scontent.fcnx2-1.fna&_nc_gid=AfgJgOu85gPx2C4Mo-0vmTp&oh=00_AYBzLtomyNoQ1iN2Kg1qIYQ9z_sZtQHRgJHB6i_IN2COqg&oe=66E1E314",
    "/hero/beam.PNG",
    "/hero/EIEI.PNG",
  ];

  const itemsPerPage = 6;
  const paginatedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Width at which the setting applies
        settings: {
          slidesToShow: 2, // Adjust for tablets or small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Width at which the setting applies
        settings: {
          slidesToShow: 1, // Adjust for mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 20 - 10; // Adjust the factor to change sensitivity
      const y = (event.clientY / window.innerHeight) * 20 - 10; // Adjust the factor to change sensitivity

      const carouselItems = document.querySelectorAll(".carousel-item img");
      carouselItems.forEach((item) => {
        (
          item as HTMLElement
        ).style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="xl:py-24 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-5/6 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-30 duration-500 bg-sky-900"></div>
            <div className="relative z-20">My History</div>
          </button>
        </div>

        <Slider {...settings}>
          {paginatedImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover justify-center"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default MyProfile;
