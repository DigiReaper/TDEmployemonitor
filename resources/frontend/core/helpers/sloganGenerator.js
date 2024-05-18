const slogans = ['Today\'s Dental - Navigating Dentistry\'s Complex Landscape Together', 'Manage your teeth with ease'];

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

export default () => {
    return slogans[getRandomInt(slogans.length)];
};
