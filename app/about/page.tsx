import { HalfSection, Section } from "../components/Section";
import FAQ from "../containers/FAQ";
import Gallery from "../containers/Gallery";

const About = () => {
  return (
    <div>
      <div className="relative w-full h-72 md:h-72 bg-gradient-to-r from-orange-500 to-yellow-500 flex items-end justify-start p-5 text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          A BETTER APPROACH TO TRAINING
        </h1>
      </div>

      <div className="relative w-full min-h-screen flex flex-col md:flex-row">
        <div className="flex-grow flex flex-col justify-start mt-20 w-full md:w-2/5 p-5 md:px-5 ">
          <div className="text-center md:text-left">
            <hr className="block md:hidden border-gray-400 my-4 w-1/2 mx-auto" />
          </div>
          <div className="mt-10 mb-16">
            <p className="text-base md:text-lg text-white leading-loose md:leading-relaxed text-center md:text-left">
              We are dedicated to helping individuals achieve their highest
              physical and mental potential through tailored boxing and fitness
              programs. Our mission is to offer customized and highly effective
              workouts to people of all fitness levels, ensuring each member
              reaches their unique fitness goals. At Fitbox, we believe in the
              transformative power of boxing for both body and mind. Whether
              you&apos;re aiming for weight loss, muscle gain, or overall
              fitness, our personalized programs are designed to meet your
              specific needs.
            </p>
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center w-full md:w-3/5 p-5">
          <div className="w-full h-64 md:h-full rounded shadow-lg bg-gray-600"></div>
        </div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col md:flex-row">
        <FAQ />
      </div>
    </div>
  );
};

export default About;
