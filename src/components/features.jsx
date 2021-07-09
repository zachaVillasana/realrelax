export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
        <div className='section-title space'>
                <h2>Registrate o Inicia Sesión</h2>

              </div>
      <div className='container row'>

      <form className="borde-form">
                <h3>Registrarse</h3>

            <div className="row">
            <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Apellido" />
                </div>

            </div>

            <div className="row">
            <div className="form-group">
                    <label>RUN</label>
                    <input type="text" className="form-control" placeholder="xx.xxx.xxx-x" />
                </div>

                <div className="form-group">
                    <label>Telefono</label>
                    <input type="text" className="form-control" placeholder="+xx x xxxx xxxx" />
                </div>

            </div>
            



                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Enter Correo" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <button type="submit" className="btn btn-custom btn-lg btn btn-dark btn-lg btn-block">Registrarse</button>
              
            </form>


            <form className="borde-form">
                <h3>Inicia Seción</h3>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo" />
                </div>

        
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <button type="submit" className=" btn btn-custom btn-lg btn btn-dark btn-lg btn-block">Inicia Sesión</button>
            
            </form>

      </div>

      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy;RealRelax
          </p>
        </div>
      </div>
    </div>

  )
}
