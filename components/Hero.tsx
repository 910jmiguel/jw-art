"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Hero = () => {

  const router = useRouter(); // Hook for navigation

  const handleExploreClick = () => {
    router.push("/gallery"); // Navigate to /explore page
  };

  return (
    <section className="bg-darkgray py-20 px-20">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="font-sans text-white text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-6xl pb-6">
            White Charcoal Pencil <br></br>
            on <br></br>
            Paper Drawings
          </h1>
          <p className="font-sans text-white pb-6 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            sapiente repellendus, eum eveniet porro, architecto reprehenderit
            molestias repellat delectus ipsum nisi vel a maiores ab praesentium
            ducimus dicta quis illo.
          </p>

          <Button onClick={handleExploreClick} label="Explore" icon={faCircleChevronRight} />

        </div>

        <Image src="/pic1.png" alt="matthews" width={600} height={450} className=""/>
      </div>
    </section>
  );
};

export default Hero;
