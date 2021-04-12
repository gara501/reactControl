const colorsR = [
	{id: 1, code: '#FA0F0F'},
	{id: 2, code: '#FA420B'},
	{id: 3, code: '#FA5E0B'},
	{id: 4, code: '#FA740B'},
	{id: 5, code: '#FA980B'}
];
const colorsG = [
	{id: 1, code: '#7B950F'},
	{id: 2, code: '#64950F'},
	{id: 3, code: '#4A950F'},
	{id: 4, code: '#0F9550'},
	{id: 5, code: '#0F9579'}
];
const colorsB = [
	{id: 1, code: '#0F7D95'},
	{id: 2, code: '#0F5A95'},
	{id: 3, code: '#0F2D95'},
	{id: 4, code: '#190F95'},
	{id: 5, code: '#4A0F95'}
];
const colorsS = [
	{id: 1, code: '#fff'},
	{id: 2, code: '#000'},
	{id: 3, code: '#C9C9BF'},
	{id: 4, code: '#FA0F0F'}
];

function useButtonRgb(color: string, id: number) {
	if (color === 'R') {
		return colorsR.filter(item => item.id === id)[0].code;
	} else if(color === 'G') {
		return colorsG.filter(item => item.id === id)[0].code;
	} else if(color === 'B') {
		return colorsB.filter(item => item.id === id)[0].code;
	} if(color === 'S') {
		return colorsS.filter(item => item.id === id)[0].code;
	}

}

export const colorsAll = [...colorsR, ...colorsG, ...colorsB];
export default useButtonRgb;