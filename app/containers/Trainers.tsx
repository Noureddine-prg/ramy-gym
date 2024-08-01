import { Section } from "../components/Section";

const Trainers = () => {
  return (
    <Section id="trainer">
      <div className="h-full w-full px-4 py-8 md:px-20 md:py-16 lg:px-40 lg:py-32 bg-black flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-shrink-0 w-full h-64 md:h-96 lg:w-1/3 lg:h-full mb-8 lg:mb-0 flex items-center justify-center">
          <img
            src="/images/coach.jpg"
            alt="Coach"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-2/3">
          <div className="text-white text-center w-full px-4 md:px-20 lg:px-0 my-8 lg:mt-0 lg:ml-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet The Coach
            </h2>
            <p className="text-base md:text-lg leading-relaxed md:leading-loose mb-8">
              Ramy grew up in a very athletic environment where he started
              playing sports at the age of seven. He played a wide array of
              sports including Track & Field, Soccer, Swimming, Karate, Judo and
              Boxing. Ramy's natural talent combined with over twenty years of
              hard training, led him to develop a very high understanding of the
              human body mechanism and motor fitness (coordination between the
              brain and the body).
            </p>
            <hr className="border-gray-400 my-4 w-1/2 mx-auto" />
            <p className="text-base md:text-lg leading-relaxed md:leading-loose mb-8">
              Ramy's high athleticism and strong drive led him to a professional
              soccer and boxing career. Ramy is now a certified personal trainer
              (CPT), nutritionist, boxing coach, soccer coach and holds a safe
              sports certification.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Trainers;
