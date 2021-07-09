export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>

        <div className='row'>
          <div className='section-title'>
            <h2>Inicia sesión o crea una cuenta</h2>
          </div>
          <form name='sentMessage' validate>
            <div className='row email'>

              <p>Dirección de e-mail:</p>
              <div className='form-group correo'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-control'
                  placeholder='Correo'
                  required
                />
                <p className='help-block text-danger'></p>

              </div>
            </div>

            <div id='success'></div>
            <button type='submit' className='btn btn-custom btn-lg'>
              Continuar con e-mail
            </button>
          </form>

        </div>

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
