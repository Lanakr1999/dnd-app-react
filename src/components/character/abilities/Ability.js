import React, {useContext, useEffect, useState} from 'react';
import http from "../../../http";
import {Context} from "../../Context";
import Skills from "./skills/Skills";
import './Ability.scss';

 const Ability = (url) => {

     const { abilities } = useContext(Context);
     const [abilityName, setAbilityName] = useState('');
     const [abilityInfo, setAbilityInfo] = useState('');
     const [abilityStat, setAbilityStat] = useState(-1);
     const [abilitySkills, setAbilitySkills] = useState([]);

    const getAbility = () => {
        http.get(url.url).then(res => {
            setAbilityName(res.data.full_name);
            setAbilityInfo(res.data.desc[0]);
            setAbilitySkills(res.data.skills);
            for (let ability in abilities) {
                if (abilityName.toLowerCase() === ability) {
                    setAbilityStat(Math.floor((abilities[ability] - 10) / 2));
                }
            }
        });
    }
    useEffect(() => {
        getAbility();
    }, [abilities]);

    return (
        <div className='ability'>
            <p className='ability-name'>{abilityName}</p>
            <div className='ability-container' key={abilityName}>
                <p>{abilityInfo}</p>
                {
                    abilitySkills.length ? <p><b>SKILLS</b></p> : <div></div>
                }
                <Skills abilitySkills={abilitySkills} skillModifier={abilityStat}></Skills>
            </div>
        </div>
    )
}

export default Ability;