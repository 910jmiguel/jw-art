import Image from "next/image";

const About = () => {
  return (
    <section className="p-10 bg-lightgray">
      <div className="flex items-center p-10">
        <div className="flex items-center gap-5 lg:gap-10 p-8 rounded-3xl bg-darkgray2">
          <div className="text-white p-10">
            <h1 className="font-bold text-5xl pb-10">About Us</h1>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, distinctio tenetur neque perferendis id in ipsum
              aut quas, doloremque animi placeat recusandae inventore atque sit
              facere rerum provident corporis dolore saepe explicabo eos at non!
              Accusantium porro, cum minima quia reprehenderit officiis id
              pariatur rem corrupti vero necessitatibus a error maiores dolor
              est dolorum, autem aperiam, debitis nemo. Soluta sit quod suscipit
              nemo mollitia ab ex optio perspiciatis error quae distinctio
              tenetur doloremque aliquid, commodi inventore repellendus odit
              eaque consequuntur, adipisci eligendi maiores doloribus atque?
              Natus maxime aut, voluptatem, vero laboriosam quidem veritatis
              unde rerum eaque veniam rem vel facilis. <br></br>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem culpa rerum, vitae porro omnis recusandae deserunt
              voluptas fugit ipsum illo nihil veritatis pariatur numquam amet
              totam labore repudiandae nulla doloremque?
            </p>
          </div>
          <Image src="/dummypic.jpg" alt="dummy pic" width={450} height={300} className="p-5" />
        </div>
      </div>
    </section>
  );
};

export default About;
