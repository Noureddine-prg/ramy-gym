interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center border">
      {children}
    </div>
  );
};

export default Section;
