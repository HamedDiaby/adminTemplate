import React, {useEffect, useRef, useState} from "react";
import styles from './styles.module.css';
import { ImagePickerprops } from "./interfaces";
import { Button } from "../Button";

export const ImagePicker:React.FC<ImagePickerprops> = ({
    onUploadImage,
    reset,
})=> {

    const hiddenFileInput = useRef<any>(null);
    const [image, setImage] = useState<string>('');

    useEffect(()=> {
        if(reset){
            setImage('');
        }
    }, [reset]);

    const hanleClick = ()=> {
        hiddenFileInput.current.click()
    }

    const handleChange = (event: any)=> {
        const fileUploaded = event.target.files[0];
        const uri = URL.createObjectURL(fileUploaded);
        onUploadImage(fileUploaded, uri);
        setImage(uri);
    }

    return (
        <>
            {
                image !== '' ? (
                    <div className={styles.imageContainer}>
                        <img 
                            src={image}
                            alt="image de bus"
                            className={styles.image}
                        />
                        <Button 
                            buttonName='Charger une autre image'
                            onButtonPress={hanleClick}
                        />
                    </div>
                ) : (
                    <div 
                        onClick={hanleClick}
                        className={styles.uploadImg}
                    >
                        + charger une image
                    </div>
                )
            }
            <input 
                type='file'
                accept="image/*"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
            />
        </>
    )   
}