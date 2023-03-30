import { getFirestore, collection, getDocs } from "firebase/firestore";

export const getProducts = () => {
  const db = getFirestore();

  const itemsCollection = collection(db, "instrumentos");

  return getDocs(itemsCollection).then((snapshot) => {
    const docs = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return docs;
  });
};
