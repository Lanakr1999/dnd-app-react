import React, {useContext, useState} from 'react';
import './CharacterList.scss';
import CharacterInfo from "./CharacterInfo";
import {Context} from "../Context";
import Ability from "./abilities/Ability";

const CharacterList = () => {

    const { characterStats } = useContext(Context);


    return (
        <div className='character-list'>
            <CharacterInfo></CharacterInfo>
            <div className='stats-container'>
                {
                    Object.keys(characterStats).map(res =>
                        <Ability url={characterStats[res].url} key={characterStats[res].index}>
                        </Ability>
                    )
                }
            </div>
        </div>
    );
};

export default CharacterList;