module.exports = (fn) => {
    return (reqq,res, next) =>{
        fn(reqq, res, next).catch(next);
    };
};