"use client";

import { Section } from "../components/Section";
import WorkoutCard from "../components/WorkoutCard";

const Programs = () => {
  return (
    <Section id="programs">
      <div className="flex flex-wrap justify-center gap-14 px-4 py-12 items-center">
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
          otherText="Meet your goals to get leaner and gain muscle by following a personalized and effective program. "
        />

        <WorkoutCard
          headerText="1-1 Group"
          videoLink="/videos/WeightTraining.mp4"
          imageLink="/images/weight.png"
          otherText=""
        />
      </div>
    </Section>
  );
};

export default Programs;
