// Requerimos los id de el input y la foto
const foto = document.getElementById("foto")

const input = document.getElementById("input")

// requerimos la url y el preset de cloudinary
const cloudinary_url = ""

const cloudinary_preset = ""

// cuando se escuche el evento del input
input.addEventListener("change", (e) => {
    // direccion del archivo
    const file = e.target.files[0]

    const form = new FormData()

    //agregamos la ruta, el archivo y el preset

    form.append("file", file)
    form.append("upload_preset", cloudinary_preset)

    // axios(sirve para hacer peticiones a un servidor). designamos los parametros, los datos agregados, como el archivo
    // designamos el tipo de archivo que enviamos
    
    axios.post(cloudinary_url, form, {
        headers: {
            "content-type": "multipart/form-data"
        }

        // promesa
    }).then((res) => {
        console.log("funciona brooooo")
    })
})