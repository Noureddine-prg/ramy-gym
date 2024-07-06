import { useState } from "react";

interface WorkoutCardProps {
  videoLink?: string;
  imageLink?: string;
  headerText: string;
  otherText?: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  videoLink,
  imageLink,
  headerText,
  otherText,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    //card
    <div
      className="p-4 border rounded shadow-lg max-w-sm bg-grey100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative ${
          isHovered ? "grayscale-0" : "grayscale"
        } transition-all duration-500`}
      >
        {videoLink && isHovered ? (
          <video controls autoPlay className="w-full rounded-lg">
            <source src={videoLink} type="video/mp4" />
            Your browser does not support this video.
          </video>
        ) : (
          imageLink && (
            <img src={imageLink} alt="N/A" className="w-ful mb-4 rounded-lg" />
          )
        )}
      </div>

      <h2>{headerText}</h2>

      {otherText && <p className="text-gray-700">{otherText}</p>}
    </div>
  );
};

export default WorkoutCard;

//   return (
//     <div
//       className="p-4 border rounded-lg shadow-lg max-w-sm bg-gray-100"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`relative ${isHovered ? 'grayscale-0' : 'grayscale'} transition-all duration-500`}>
//         {videoLink && isHovered ? (
//           <video controls autoPlay className="w-full rounded-lg">
//             <source src={videoLink} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           imageLink && <img src={imageLink} alt={headerText} className="w-full mb-4 rounded-lg" />
//         )}
//       </div>
//       <h2 className="text-xl font-bold mb-2">{headerText}</h2>
//       {otherText && <p className="text-gray-700">{otherText}</p>}
//     </div>
//   );
// };

// export default WorkoutCard;
