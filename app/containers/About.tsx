import { Section } from "../components/Section";

const About = () => {
  return (
    <Section id="about">
      <div className="w-full h-full flex flex-col md:flex-row p-5 py-28">
        <div className="w-full md:w-2/5 mt-4 px-5">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1 ml-1">
              About Us
            </h3>

            <h1 className="text-4xl font-bold text-white mb-4">
              A BETTER APPROACH TO TRAINING
            </h1>
          </div>

          <div className="mt-10 mb-16">
            <p className="text-white text-lg leading-relaxed ">
              Fitbox, founded by Ramy Anwar, is dedicated to helping individuals
              achieve their highest physical and mental potential through
              tailored boxing and fitness programs. Our mission is to offer
              customized and highly effective workouts to people of all fitness
              levels, ensuring each member reaches their unique fitness goals.
              At Fitbox, we believe in the transformative power of boxing for
              both body and mind. Whether you're aiming for weight loss, muscle
              gain, or overall fitness, our personalized programs are designed
              to meet your specific needs.
            </p>
          </div>

          <div className="mt-5 ">
            <button className="w-1/4 border text-white font-semibold py-2 px-4 rounded hover:text-black hover:bg-white">
              Book Session
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-5 flex items-center justify-center">
          <div className="w-full h-full rounded shadow-lg bg-gray-600"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
