import { db, dbref } from '../firebase';
import {child, get} from "firebase/database";

export const getCities = async (id) => {
    const citiesRef = dbref(db);
    return get(child(citiesRef, `cities/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
          } else {
            return []
          }
    }).catch((error) => {
        console.error(error);
    });
}