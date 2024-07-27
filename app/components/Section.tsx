interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <div id={id} className="max-w-full h-screen flex flex-col  justify-center">
      {children}
    </div>
  );
};

const HalfSection: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      style={{ height: "40vh" }}
      className="overflow-x-hidden max-w-screen flex flex-col items-center justify-center hide-scrollbar"
    >
      {children}
    </div>
  );
};

const MedSection: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      style={{ height: "70vh" }}
      className="overflow-x-hidden w-screen flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
};

export { Section, HalfSection, MedSection };
