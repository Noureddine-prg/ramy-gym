"use client";

import { Section } from "../components/Section";
import WorkoutCard from "../components/WorkoutCard";

const Training = () => {
  return (
    <Section id="services">
      <div className="px-8 py-6 grid gap-24 grid-cols-1 h-5/6 sm:grid-cols-2 lg:grid-cols-3 ">
        <WorkoutCard
          headerText="FITNESS BOXING"
          videoLink="/videos/fitboxvideo.mp4"
          imageLink="/images/fitbox.png"
          otherText="Improve natural power, get stronger, build stamina, maximize your muscle endurance and resistance. 
          ALL LEVELS"
        />
        <WorkoutCard
          headerText="BOXING LESSONS: BEGINNER TO ADVANCED"
          videoLink="/videos/resting.mp4"
          imageLink="/images/fitbox.png"
          otherText=" Learn the fundamentals to increase boxing knowledge and improve technical boxing skills."
        />
        <WorkoutCard
          headerText="BOXING FOR WEIGHT LOSS"
          videoLink="/videos/WeightTraining.mp4"
          imageLink="/images/weight.png"
          otherText="Meet your goals to get leaner and gain muscle by following a personalized and effective program. "
        />
      </div>
    </Section>
  );
};

export default Training;
