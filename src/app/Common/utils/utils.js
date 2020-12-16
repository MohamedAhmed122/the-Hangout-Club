
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


export const handleColor = category =>{
    if (category ==='drinks') return 'orange';
    if (category ==='culture') return 'green';
    if (category ==='film') return 'yellow';
    if (category ==='food') return 'pink';
    if (category ==='music') return 'violet';
    if (category ==='travel') return 'blue';
    if (category ==='education') return 'teal';

}

export const handleWidthAndHeight = (w) =>{
    if (w > 1200 ) return 600;
    if (w > 900 && w < 1200) return 400;
    if (w > 500 && w <900) return 300;
    if (w > 380 && w <500) return 270;
}