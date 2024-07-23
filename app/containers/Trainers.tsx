import { MedSection } from "../components/Section";

const Trainers = () => {
  return (
    <MedSection id="trainer">
      <div className="h-full w-full px-20 py-16 flex items-center justify-center bg-black">
        <div className="flex-shrink-0 bg-white w-1/3 h-full">d</div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <div className="text-white text-center w-full px-10 lg:px-20 my-8 mx-5 lg:mt-0 lg:ml-16">
            <div className="w-full flex justify-center">
              <h2 className="text-4xl font-bold mb-8">Meet The Coach</h2>
            </div>
            <p className="text-lg leading-relaxed mb-8">
              Ramy grew up in a very athletic environment where he started
              playing sports at the age of seven. He played a wide array of
              sports including Track & Field, Soccer, Swimming, Karate, Judo and
              Boxing. Ramy's natural talent combined with over twenty years of
              hard training, led him to develop a very high understanding of the
              human body mechanism and motor fitness (coordination between the
              brain and the body).
            </p>
            <hr className="border-gray-400 my-4 w-1/2 mx-auto" />
            <p className="text-lg leading-relaxed mb-8">
              Ramy's high athleticism and strong drive led him to a professional
              soccer and boxing career. Ramy is now a certified personal trainer
              (CPT), nutritionist, boxing coach, soccer coach and holds a safe
              sports certification.
            </p>
          </div>
        </div>
      </div>
    </MedSection>
  );
};

export default Trainers;
