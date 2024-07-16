import { Section } from "../components/Section";

const Trainers = () => {
  return (
    <Section id="trainer">
      <div className="h-full w-full p-20 flex items-center bg-blue-300">
        <div className="flex flex-row items-center w-full">
          <div className="flex-shrink-0 bg-white h-64 w-64 rounded-full">
            ""
          </div>
          <div className="ml-8">
            <h2 className="text-2xl font-bold">Trainer Name</h2>
            <p className="mt-2">
              Brief description or bio of the trainer goes here.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Trainers;
