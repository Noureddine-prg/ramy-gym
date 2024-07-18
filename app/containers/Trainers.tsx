import { Section } from "../components/Section";

const Trainers = () => {
  return (
    <Section id="trainer">
      <div className="h-full w-full px-40 py-32 bg-black flex items-center justify-center">
        <div className="flex-shrink-0 bg-white w-1/3 h-full">d</div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full ">
          <div className="text-white px-20 my-8 mx-5 lg:mt-0 lg:ml-16">
            <h2 className="text-4xl font-bold mb-4 w-1/2">Meet The Coach</h2>
            <p className="text-lg leading-relaxed mb-8">
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
              ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              Lorem ipsum dolor Lorem ipsum dolor
            </p>
            <hr className="border-gray-400 my-4 px-4" />
            <p className="text-lg leading-relaxed mb-8">
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
              ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              Lorem ipsum dolor Lorem ipsum dolor
            </p>
            <hr className="border-gray-400 my-4" />
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
              ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              Lorem ipsum dolor Lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Trainers;
