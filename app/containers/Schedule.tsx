import { HalfSection } from "../components/Section";

const Schedule = () => {
  return (
    <HalfSection id="schedule">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Monday - Friday</h1>
          <p className="text-2xl mt-2">9am - 6pm</p>
        </div>
      </div>
    </HalfSection>
  );
};

export default Schedule;
