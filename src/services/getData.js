import { db } from '../firebase';

export const getCities = () => {
    const citiesRef = db.ref('cities');
    return citiesRef.once('value', (snapshot) => {
        const data = snapshot.val();
        if(data) {
            return data;
        } else {
            return []
        }
    });
}