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
      style={{ height: "40vh" }}
      className="border-white border-t-2 border-b-2 overflow-x-hidden w-screen flex flex-col items-center justify-center hide-scrollbar"
    >
      {children}
    </div>
  );
};

export { Section, HalfSection };
