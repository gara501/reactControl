import React, { MouseEvent, useState, useEffect } from 'react';
import useButtonRgb, {colorsAll} from './useButtonRgb';
import {useBg} from '../context/colorsContext';

type dataColor = {
	color: string,
	id: number,
	caption?: string
}

function RgbButton(data: dataColor) {
	const {setBg} = useBg();
	const [clr, setClr] = useState('');

	useEffect(() => {
		let interval;
		console.log('ACA', clr)
		if (clr.length > 0) {
			interval = setInterval(() => {
				const randomColor = colorsAll[Math.floor(Math.random() * colorsAll.length)];
				setBg(randomColor.code);
			}, 1000);
		} else {
			console.log('CLEAR');
			clearInterval(interval);
		}
	}, [clr, setBg])

	const changeColor = (e: MouseEvent<HTMLButtonElement>) => {
		const text = e.currentTarget.textContent;
		const randomColor = colorsAll[Math.floor(Math.random() * colorsAll.length)];
		if (text === 'flash') {
			setClr(randomColor.code);
		} else {
			setBg(e.currentTarget.style.background);
			setClr('');
		}
	}

	return (
		<button className="button-standard" onClick={changeColor} style={{background: useButtonRgb(data.color, data.id)}}>
			<span></span>
			{ data.caption ? <span>{data.caption}</span>: '' }
		</button>
  );
}

export default RgbButton;
