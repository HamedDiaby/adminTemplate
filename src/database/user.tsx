import { enumDataBaseCollections } from '../enums';
import {
    db,
    doc, setDoc, getDoc,
    collection, query, where, getDocs,
    updateDoc,
    getStorage, ref, uploadBytesResumable,
    getDownloadURL
} from './config';

export interface uploadedImageState {
    uri: string
    name: string
    file: any
}

export interface profilImagesState {
    ref: string,
    uri: string
}

export interface userState {
    id: string
    lastname: string
    firstname: string
    birth: string
    phone: string
    country: string
    city: string
    backupMail: string
    profilImages?: profilImagesState[]
    isVerify: boolean
    isActive: boolean
    notificationOn: boolean
    createAt?: string
}

export const userModel = ()=> {

    const getUser = async(phoneNumber: string)=> {
        let user: any;
        const users = query(
            collection(db, enumDataBaseCollections.users), 
            where("phone", "==", phoneNumber)
        );
        const querySnapshot = await getDocs(users);
        querySnapshot.forEach((doc) => {
            user = doc.data();
        });
        if(user){
            return user;
        } else {
            return null;
        }
    }

    const createUser = async(user: userState)=> {
        await setDoc(doc(db, enumDataBaseCollections.users, user.id), user);

        const docRef = doc(db, enumDataBaseCollections.users, user.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
            return null;
        }
    };

    const addUserImages = async(id: string, uploadedImages: uploadedImageState[])=> {
        try {
            const storage = getStorage();
            let profilImages:profilImagesState[] = [];
            for(let i = 0; i < uploadedImages.length; i++){
                const img_uri_ref = `profilImages/${id}/${uploadedImages[i].name}`;
                const storageRef = ref(storage, img_uri_ref);
                const fetchImg = await fetch(uploadedImages[i].uri);
                const blob = await fetchImg.blob();

                await uploadBytesResumable(storageRef, blob).then(()=> {
                    profilImages.push({
                        ref: img_uri_ref,
                        uri: ''
                    });
                });
            }
            for(let i = 0; i < profilImages.length; i++){
                await getDownloadURL(ref(storage, profilImages[i].ref)).then((url) => {
                    profilImages[i].uri = url;
                })
            }
            // console.log(profilImages);

            const userRef = await doc(db, enumDataBaseCollections.users, id);
            await updateDoc(userRef, {
                profilImages: profilImages,
                createAt: `${new Date()}`
            });

            return true;
        } catch (error) {
            console.log('=== error==>', error);
            return false;
        }
    }

    return {
        createUser,
        getUser,
        addUserImages
    }
}