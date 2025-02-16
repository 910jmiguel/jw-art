import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className="bg-darkgray py-20 px-20">
      <div className="flex justify-between items-center">
        <div className="font-sans text-white text-left">
          <h1 className="font-bold text-6xl pb-10">
            White Charcoal Pencil <br></br>
            on <br></br>
            Paper Drawings
          </h1>
          <p className="font-sans text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            sapiente repellendus, eum eveniet porro, architecto reprehenderit
            molestias repellat delectus ipsum nisi vel a maiores ab praesentium
            ducimus dicta quis illo.
          </p>
          <button className="flex justify-center gap-3 rounded-full border bg-lightgray">
            <label className="font-bold text-black whitespace-nowrap cursor-pointer p-3">Explore <FontAwesomeIcon icon={faCircleChevronRight} /></label>
          </button>
        </div>

        <Image src="/pic1.png" alt="matthews" width={600} height={450} />
      </div>
    </section>
  );
};

export default Hero;
