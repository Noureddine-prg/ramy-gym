interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
};

const HalfSection: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      style={{ height: "45vh" }}
      className=" w-full flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
};

export { Section, HalfSection };
