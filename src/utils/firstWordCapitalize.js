const firstWordCapitalize = (array=[])=>{
    return array.map(elem => {
        return elem.split(' ')
        .map(elem => elem[0]?.toUpperCase() + elem.slice(1))
        .join(' ');
    });
    
};

export default firstWordCapitalize;
