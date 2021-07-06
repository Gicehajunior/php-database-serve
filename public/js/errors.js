const custom_args = [
    'create',
    'push',
];

const error_return = (args) => {
    if((args.slice(2)).length !== custom_args.length){
        console.log('Seems any of your argument passed is incorrect!');
        return false;
    };
    
    for(let i = 0; i < (args.slice(2)).length; i++){
        if(!custom_args.includes((args.slice(2))[i])){
            console.log('Seems any of your argument passed is incorrect!');
            return false;
        };
    }; 
    return true;
}

module.exports = error_return;

