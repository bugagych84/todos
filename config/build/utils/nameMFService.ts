import packageJson from '../../../package.json';

export const nameMFService = () => {
    const arr = packageJson.name.split('-');
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (i > 0) newArr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        else newArr[i] = arr[i];
    }

    return newArr.join('');
};