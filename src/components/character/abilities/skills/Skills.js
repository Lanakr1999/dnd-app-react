import React, {useState} from 'react';
import './Skills.scss';
import http from "../../../../http";

const Skills = ({abilitySkills, skillModifier}) => {

    const [skillInfo,  setSkillInfo] = useState('');
    const [isSkillActive, setSkillActive] = useState(false);

    const getSkill = (skill) => {
        console.log(abilitySkills[skill].name);
        let name = abilitySkills[skill].name.toLowerCase();
        name = name.split(" ");
        name = name.join("-");
        http.get(`/api/skills/${name}`).then(res => {
            setSkillInfo(res.data);
            setSkillActive(!isSkillActive);
            console.log(res);
        });
    }

    return (
        <div className='skills-container'>
            {Object.keys(abilitySkills).map(skill =>
                <div
                    key={abilitySkills[skill].name}
                    onClick={() => getSkill(skill)}
                ><u><b>{abilitySkills[skill].name}</b></u> = {skillModifier}
                </div>
            )}
            {isSkillActive
                ?
                <div className='is-active' onClick={() => setSkillActive(false)}><p>{skillInfo.desc[0]}</p></div>
                :
                <div className='non-active'></div>}
        </div>
    );
};

export default Skills;