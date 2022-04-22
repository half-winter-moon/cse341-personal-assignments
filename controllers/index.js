displayName = (req, res) => {
    const data = 
    'Melody Handy';
    res.status(200).send(data);
};

module.exports = {
    displayName,
};