import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../Context";
import "./CharacterInfo.scss";
import QuickChart from "quickchart-js";

const CharacterInfo = () => {
    const {abilities, setAbilities} = useContext(Context);
    const [imgUrl, setImgUrl] = useState('');
    const [classChartUrl, setClassChartUrl] = useState('');
    const [classChartArr, setClassChartArr] = useState([]);

    const setStat = (event) => {
        if (event.target.value === '') {
            setAbilities({...abilities, [event.target.id]: 8});
        }
        setAbilities({...abilities, [event.target.id]: event.target.value});

    }

    const getBetterClass = () => {
     let arr = [];
     let param = 0;
     for (let i = 0; i < 12; i++) {
         switch (i) {
             case 0:
                 param = Math.round(
                     2.5 * ((+abilities.strength - 10) / 2) +
                        0.5 * ((+abilities.dexterity - 10) / 2) +
                        ((+abilities.constitution - 10) / 2) +
                        0.05 * ((+abilities.intelligence - 10) / 2) +
                        ((+abilities.wisdom - 10) / 2) +
                        0.5 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 1:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                        0.25 * ((+abilities.dexterity - 10) / 2) +
                        0.5 * ((+abilities.constitution - 10) / 2) +
                        ((+abilities.intelligence - 10) / 2) +
                        ((+abilities.wisdom - 10) / 2) +
                        2.5 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 2:
                 param = Math.round(
                     ((+abilities.strength - 10) / 2) +
                        0.25 * ((+abilities.dexterity - 10) / 2) +
                     ((+abilities.constitution - 10) / 2) +
                        0.5 * ((+abilities.intelligence - 10) / 2) +
                        2.5 * ((+abilities.wisdom - 10) / 2) +
                        0.25 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 3:
                 param = Math.round(
                     ((+abilities.strength - 10) / 2) +
                        0.5 * ((+abilities.dexterity - 10) / 2) +
                         ((+abilities.constitution - 10) / 2) +
                        0.25 * ((+abilities.intelligence - 10) / 2) +
                        2.5 * ((+abilities.wisdom - 10) / 2) +
                        0.25 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 4:
                 param = Math.round(
                     2.5 * ((+abilities.strength - 10) / 2) +
                        2 * ((+abilities.dexterity - 10) / 2) +
                        ((+abilities.constitution - 10) / 2) +
                        0.5 * ((+abilities.intelligence - 10) / 2) +
                        0.25 * ((+abilities.wisdom - 10) / 2) +
                        0.25 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 5:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                        2.5 * ((+abilities.dexterity - 10) / 2) +
                        ((+abilities.constitution - 10) / 2) +
                        0.5 * ((+abilities.intelligence - 10) / 2) +
                        ((+abilities.wisdom - 10) / 2) +
                        0.25 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 6:
                 param = Math.round(
                     2.5 * ((+abilities.strength - 10) / 2) +
                        0.25 * ((+abilities.dexterity - 10) / 2) +
                        ((+abilities.constitution - 10) / 2) +
                        0.25 * ((+abilities.intelligence - 10) / 2) +
                        0.5 * ((+abilities.wisdom - 10) / 2) +
                        ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 7:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                     2 * ((+abilities.dexterity - 10) / 2) +
                     ((+abilities.constitution - 10) / 2) +
                     0.5 * ((+abilities.intelligence - 10) / 2) +
                     1.5 * ((+abilities.wisdom - 10) / 2) +
                     0.25 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 8:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                     2.5 * ((+abilities.dexterity - 10) / 2) +
                     0.25 * ((+abilities.constitution - 10) / 2) +
                     ((+abilities.intelligence - 10) / 2) +
                     0.5 * ((+abilities.wisdom - 10) / 2) +
                     ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 9:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                     ((+abilities.dexterity - 10) / 2) +
                     0.25 * ((+abilities.constitution - 10) / 2) +
                     0.5 * ((+abilities.intelligence - 10) / 2) +
                     ((+abilities.wisdom - 10) / 2) +
                     2.5 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 10:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                        ((+abilities.dexterity - 10) / 2) +
                        0.5 * ((+abilities.constitution - 10) / 2) +
                        ((+abilities.intelligence - 10) / 2) +
                        0.25 * ((+abilities.wisdom - 10) / 2) +
                        2.5 * ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
             case 11:
                 param = Math.round(
                     0.25 * ((+abilities.strength - 10) / 2) +
                        0.25 * ((+abilities.dexterity - 10) / 2) +
                        0.5 * ((+abilities.constitution - 10) / 2) +
                        2.5 * ((+abilities.intelligence - 10) / 2) +
                        2 * ((+abilities.wisdom - 10) / 2) +
                        ((+abilities.charisma - 10) / 2)) * 3;
                 if (param <= 0) {
                     param = 1;
                 }
                 arr.push(param);
                 break;
         }
     }
        setClassChartArr(arr);
    }


    const statsChart = new QuickChart();
    statsChart
        .setConfig({
        type: 'pie',
        data: {
            datasets: [{
                data: [+abilities.strength, +abilities.dexterity,
                    +abilities.constitution, +abilities.intelligence,
                    +abilities.wisdom, +abilities.charisma],
                background: [
                    'rgb(96, 211, 0)',
                    'rgb(16, 178, 2)',
                    'rgb(3, 21, 213)',
                    'rgb(124, 104, 0)',
                    'rgb(105, 0, 0)',
                    'rgb(149, 0, 171)',
                ],
                label: 'Dataset 1',
                },
            ],
            labels: ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA']
        }
    })
        .setWidth(400)
        .setHeight(200)
        .setBackgroundColor('rgba(244,255,248,0)');

    const betterClassChart = new QuickChart();
    betterClassChart
        .setConfig({
            type: 'radar',
            data: {
                labels: [
                    'Barbarian',
                    'Bard',
                    'Cleric',
                    'Druid',
                    'Fighter',
                    'Monk',
                    'Paladin',
                    'Ranger',
                    'Rogue',
                    'Sorcerer',
                    'Warlock',
                    'Wizard',
                ],
                datasets: [
                    {
                        label: 'Better class',
                        backgroundColor: 'rgba(184,12,9,0.17)',
                        borderColor: '#FCBA04',
                        pointBackgroundColor: '#5D737E',
                        data: classChartArr,
                    }
                ],
            },
            options: {
                title: {
                    display: true,
                    text: 'Click to get best class for you',
                },
            },
        })
        .setWidth(400)
        .setHeight(200)
        .setBackgroundColor('rgba(244,255,248,0)');


    useEffect(() => {
        getBetterClass();
        setClassChartUrl(betterClassChart.getUrl());
        }, []);
    useEffect(() => {
        setImgUrl(statsChart.getUrl());
        getBetterClass();
    }, [abilities]);

    return (
        <div className='info-list'>
            {Object.keys(abilities).map(ability =>
                <div className='stats-select-area' key={ability} id={ability}>
                    <p>
                        {ability} {abilities[ability]}
                    </p>
                    <input
                        type="number"
                        min="4" max="30"
                        id={ability}
                        key={ability}
                        onChange={(event) => setStat(event)}
                    />
                </div>
            )}
            <div className='stats-chart'>
                <img src={imgUrl} alt=""/>
            </div>
            <div className='stats-chart clickable' onClick={() => setClassChartUrl(betterClassChart.getUrl())}>
                <img src={classChartUrl} alt=""/>
            </div>
        </div>

    );
};

export default CharacterInfo;