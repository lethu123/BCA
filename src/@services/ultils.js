import axios from 'axios'
import {PROXY, PROXY_STORAGE} from './proxy'

import {
  firebaseApp,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'service/firebase/firebase'

export const handleAxios = async (
  url,
  method,
  data = null,
  headers = {},
  params = {},
) => {
  const secret_key = localStorage.getItem('refreshToken')

  if (secret_key) {
    headers = {...headers, 's-key': secret_key}
  }

  axios.defaults.baseURL = PROXY

  return await axios({
    method,
    url,
    data,
    headers,
    params,
  }).then(res => res.data)
}

export const handleGetDataQuery = response => {
  let datas = []
  if (response) {
    if (Array.isArray(response)) {
      datas = response
    } else {
      datas = response.data
    }
  }
  return datas
}

export const uploadSingleImageService = (file, folder = 'test') =>
  new Promise((resolve, reject) => {
    const storage = getStorage(firebaseApp)

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg',
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `images/${folder}/` + file.name)
    const uploadTask = uploadBytesResumable(storageRef, file, metadata)
    uploadTask.on(
      'state_changed',
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      error => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            reject(`User doesn't have permission to access the object`)
            break
          case 'storage/canceled':
            reject(`User canceled the upload`)
            break
          case 'storage/unknown':
            reject(`Unknown error occurred, inspect error.serverResponse`)
            break
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          resolve(downloadURL)
        })
      },
    )
  })

export const handleDecodeSearchParams = search =>
  search
    .substring(1)
    .split('&')
    .reduce(function (result, value) {
      let parts = value.split('=')
      if (parts[0])
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
      return result
    }, {})

export const checkValidUrlImage = src => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img.height)
    // img.onerror = reject
    img.src = src
  })
}

export const formatCurrencyVN = currency => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(currency)
}

export const formatCurrency = currency => {
  return currency.toFixed(0).replace(/./g, function (c, i, a) {
    return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c
  })
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))
export const uploadMedia = async (file, name, description) => {
  if (!file) return ''
  const formData = new FormData()
  formData.append('create_by', getUserData()?.uid)
  formData.append('file', file)
  if (name) formData.append('name', name)
  if (description) formData.append('description', description)

  try {
    const res = await axios.post(`${PROXY_STORAGE}`, formData)
    if (res && res.file) {
      return res.file
    }
  } catch (error) {
    return ''
  }
}

export const dataURItoBlob = dataURI => {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1])
  else byteString = unescape(dataURI.split(',')[1])
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length)
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ia], {type: mimeString})
}
