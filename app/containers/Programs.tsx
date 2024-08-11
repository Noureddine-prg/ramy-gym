"use client";

import { Section } from "../components/Section";
import WorkoutCardHorizontal from "../components/WorkoutCardHorizontal";
import WorkoutCard from "../components/WorkoutCard";

const Programs = () => {
  return (
    <Section id="programs">
      <div className="relative bg-black bg-opacity-70 m-0 p-0 border-none h-full">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-0 m-0 p-0"></div>

        {/* Desktop layout */}
        <div className="flex h-full">
          <div className="container flex-col 2xl:flex-row m-auto flex gap-10">
            <WorkoutCard
              headerText="FITNESS BOXING"
              videoLink="/videos/fitboxvideo.mp4"
              imageLink="/images/fitbox.png"
              otherText="Improve natural power, get stronger, build stamina, maximize your muscle endurance and resistance. 
              ALL LEVELS. Meet your goals to get leaner and gain muscle by following a personalized and effective program."
            />
            <WorkoutCard
              headerText="BOXING LESSONS: BEGINNER TO ADVANCED"
              videoLink="/videos/resting.mp4"
              imageLink="/images/fitbox.png"
              otherText=" Learn the fundamentals to increase boxing knowledge and improve technical boxing skills."
            />
            <WorkoutCard
              headerText="STRENGTH AND CONDITIONING"
              videoLink="/videos/WeightTraining.mp4"
              imageLink="/images/weight.png"
              otherText="Build more muscles."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Programs;
