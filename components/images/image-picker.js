"use client"

import { useRef, useState } from 'react'
import Styles from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
  const imageInput = useRef(null)
  const [pickedImage, setPickedImage] = useState()

  function handlePickClick() {
    imageInput.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={Styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={Styles.controls}>
        <div className={Styles.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="The image select by the user" fill />}
        </div>
        <input
          className={Styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={Styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick a image
        </button>
      </div>
    </div>
  )
}