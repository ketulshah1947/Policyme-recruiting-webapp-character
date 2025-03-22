import React from "react";
import { Attributes, Skill } from "../types";
import { SKILL_LIST } from "../consts";

const SkillsView = (props: { attributes: Attributes, skills: Skill[], skillsUpdated: (skills: Skill[]) => void }) => {

    const getAbilityModifier = (value: number) => Math.floor((value - 10) / 2);

    const totalSkillPoints = 10 + 4 * getAbilityModifier(props.attributes.Intelligence);
    const spentSkillPoints = props.skills.reduce((sum, skill) => sum + skill.points, 0);
    const remainingPoints = totalSkillPoints - spentSkillPoints;

    const updateSkillPoints = (skillName: string, change: number) => {
        const newSkills = props.skills.map((s) =>
            s.name === skillName
                ? { ...s, points: Math.max(0, s.points + change) }
                : s
        );
        props.skillsUpdated(newSkills);
    };

    return (
        <div style={{ margin: '20px', width: '600px', height: '550px', border: "1px solid white" }}>
            <h2 style={{ textAlign: 'center' }}>Classes</h2>
            <p>Total skill Points Available: {remainingPoints}</p>
            {props.skills.map((skill) => {
                const skillData = SKILL_LIST.find((s) => s.name === skill.name)!;
                const abilityModifier = getAbilityModifier(
                    props.attributes[skillData.attributeModifier as keyof Attributes]
                );
                const totalSkillValue = skill.points + abilityModifier;

                return (
                    <div key={skill.name}>
                        <span>{skill.name} - </span>
                        <span>Points: {skill.points} </span>
                        <button
                            onClick={() => updateSkillPoints(skill.name, 1)}
                            disabled={remainingPoints <= 0}
                        >
                            +
                        </button>
                        <button
                            onClick={() => updateSkillPoints(skill.name, -1)}
                            disabled={skill.points <= 0}
                        >
                            -
                        </button>
                        <span>
                            {" "}
                            Modifier ({skillData.attributeModifier}): {abilityModifier}{" "}
                        </span>
                        <span> Total: {totalSkillValue}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default SkillsView;