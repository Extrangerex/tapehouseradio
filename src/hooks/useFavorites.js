import { getDatabase, push } from "@firebase/database";
import { collection, getFirestore } from "@firebase/firestore";
import { useCallback } from "react";
import {  useFirebaseApp, useFirestore } from "reactfire"
import { useAuth } from "./useAuth";


const useFavorites = () => {
    const app = useFirebaseApp();
    const {user} = useAuth();
    const ref = collection(useFirestore(), user?.id);

    const pushFavorite = useCallback((music) => {
        // push
    } , []);
}