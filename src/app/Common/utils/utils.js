
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