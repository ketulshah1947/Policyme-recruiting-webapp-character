import React, { useState } from "react";
import AttributeView from "./AttributeView";
import { Attributes, Skill } from "../types";
import ClassView from "./ClassView";
import SkillsView from "./SkillsView";
import { SKILL_LIST } from "../consts";


const MainApplication = () => {

    const [attributes, setAttributes] = useState<Attributes>(
        {
            Strength: 10,
            Dexterity: 10,
            Intelligence: 10,
            Wisdom: 10,
            Charisma: 10,
            Constitution: 10
        }
    );
    const [currentSkills, updateSkills] = useState<Skill[]>(
        SKILL_LIST.map((skill) => ({ name: skill.name, points: 0 }))
    );

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <AttributeView attributes={attributes} attributesUpdated={(attr: Attributes) => { setAttributes(attr) }} />
            <ClassView attributes={attributes} />
            <SkillsView attributes={attributes} skills={currentSkills} skillsUpdated={(skills: Skill[]) => { updateSkills(skills) }} />
        </div>
    );
};

export default MainApplication;