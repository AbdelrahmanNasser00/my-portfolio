import SkillsIcons from "./SkillsIcons";
import SkillsItem from "./SkillsItem";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2 className="text-xl lg:hidden uppercase font-bold mb-4 text-custom-red">
        Skills
      </h2>
      <div className="mb-16 grid auto-rows-auto grid-cols-4">
        {SkillsIcons.map((element, index) => (
          <SkillsItem
            key={index}
            src={element.icon}
            alt={`${element.name} Icon`}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
