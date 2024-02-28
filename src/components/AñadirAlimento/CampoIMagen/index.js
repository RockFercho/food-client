import React from 'react';
import { Label, LeyendaError} from './../estilosFormmulario';


const Imagen = ({ estado, cambiarEstado, leyendaError }) => {



    const onChange = (e) => {
        const input = e.target;


        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                cambiarEstado({ campo: e.target.result, valido: true })

            };
            reader.readAsDataURL(input.files[0]);
        }

        var archivoInput = document.getElementById('archivoInput');
        var archivoRuta = archivoInput.value;
        var extPermitidas = /(.PNG|.JPG)$/i;
        if (!extPermitidas.exec(archivoRuta)) {
            alert('Asegurese de que sea una imagen');
            archivoInput.value = '';

        }
    }





    return (
        <div>
            <Label htmlFor="imagen" valido={estado.valido} >*Subir imagen</Label>

            <input
                id="archivoInput"
                type="file"
                accept="image/*"
                onChange={onChange}
                //required
            />
            <LeyendaError valido={estado.valido}>{leyendaError} </LeyendaError>

        </div>





    );

}
export default Imagen;