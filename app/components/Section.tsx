interface SectionProps {
  children: React.ReactNode;
  id?: string;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, bgColor }) => {
  return (
    <div
      id={id}
      className="relative w-full min-h-screen flex flex-col justify-center"
      style={{
        backgroundColor: bgColor || "transparent",
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
};

const HalfSection: React.FC<SectionProps> = ({ children, id, bgColor }) => {
  return (
    <div
      id={id}
      className="w-full max-h-[70vh] flex flex-col items-center justify-center"
      style={{
        backgroundColor: bgColor || "transparent",
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
};

const MedSection: React.FC<SectionProps> = ({ children, id, bgColor }) => {
  return (
    <div
      id={id}
      className="w-full max-h-[90vh] flex flex-col items-center justify-center"
      style={{
        backgroundColor: bgColor || "transparent",
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
};

export { Section, HalfSection, MedSection };
