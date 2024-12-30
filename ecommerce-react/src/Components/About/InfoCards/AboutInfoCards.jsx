import { aboutCardsInfo } from "../../../Data/staticData";
import InfoCard from "../../Shared/MiniComponents/InfoCard/InfoCard";
import s from "./AboutInfoCards.module.scss";

const AboutInfoCards = () => {
  return (
    <section className={s.infoCardsSection}>
      {aboutCardsInfo.map((cardInfo, index) => (
        <InfoCard key={cardInfo.id} data={cardInfo} index={index} />
      ))}
    </section>
  );
};
export default AboutInfoCards;
