import { db } from './firebase';
import { onValue, ref } from 'firebase/database';

export const getCities = () => {
    const query = ref(db, "cities");
    return onValue(query, (snapshot) => {
        const data = snapshot.val();
  
        if (snapshot.exists()) {
          return data
        }
      }); 
}