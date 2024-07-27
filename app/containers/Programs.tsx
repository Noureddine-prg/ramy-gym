"use client";

import { Section } from "../components/Section";
import WorkoutCardHorizontal from "../components/WorkoutCardHorizontal";
import WorkoutCard from "../components/WorkoutCard";

const Programs = () => {
  return (
    <Section id="programs">
      <div className="block sm:hidden">
        <div className="flex flex-wrap justify-center gap-4 px-4 py-12 items-center mb-20">
          <WorkoutCardHorizontal
            headerText="FITNESS BOXING"
            videoLink="/videos/fitboxvideo.mp4"
            imageLink="/images/fitbox.png"
            otherText="Improve natural power, get stronger, build stamina, maximize your muscle endurance and resistance. 
            ALL LEVELS. Meet your goals to get leaner and gain muscle by following a personalized and effective program."
          />
          <WorkoutCardHorizontal
            headerText="BOXING LESSONS: BEGINNER TO ADVANCED"
            videoLink="/videos/resting.mp4"
            imageLink="/images/fitbox.png"
            otherText=" Learn the fundamentals to increase boxing knowledge and improve technical boxing skills."
          />
          <WorkoutCardHorizontal
            headerText="STRENGTH AND CONDITIONING"
            videoLink="/videos/WeightTraining.mp4"
            imageLink="/images/weight.png"
            otherText="Build more muscles."
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-wrap justify-center gap-4 md:gap-20 px-4 py-12 items-center mb-20">
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
    </Section>
  );
};

export default Programs;
