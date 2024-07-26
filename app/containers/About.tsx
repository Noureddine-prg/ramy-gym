import { Section } from "../components/Section";
import { ButtonA } from "../components/Buttons";

const About = () => {
  return (
    <Section id="about">
      <div className="w-full h-full flex flex-col-reverse md:flex-row p-5 py-16 md:py-32">
        <div className="w-full md:w-2/5 mt-4 md:px-5">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:ml-1">
              About Us
            </h3>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 sm:text-sm">
              A BETTER APPROACH TO TRAINING
            </h1>
          </div>
          <div className="mt-10 mb-16">
            <p className="text-base md:text-lg text-white leading-relaxed">
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
        </div>
        <div className="w-full md:w-3/5 flex items-center justify-center mb-10 md:mb-0 md:p-5">
          <div className="w-full h-64 md:h-full rounded shadow-lg bg-gray-600"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
