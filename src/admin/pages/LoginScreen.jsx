import React, { useState } from 'react';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'une requête de connexion
    setTimeout(() => {
      console.log('Données de connexion:', formData);
      setIsLoading(false);
      alert('Connexion simulée réussie !');
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  {/* En-tête */}
                  <div className="d-flex justify-content-center gap-4 text-center mb-4">
                    <div className="mb-3">
                      <img src='img/onpr_logo_transparent.png' height={60} style={{fontSize: '4rem'}}></img>
                      {/* <i className="pi pi-user text-primary" style={{fontSize: '4rem'}}></i> */}
                    </div>
                    <div>
                        <h2 className="card-title text-dark fw-bold">Connexion</h2>
                        <p className="text-muted">Accédez à votre compte</p>
                    </div>                    
                  </div>

                  {/* Formulaire */}
                  <div onSubmit={handleSubmit}>
                    {/* Champ Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        <i className="pi pi-envelope me-2 text-primary"></i>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-3"
                        id="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Champ Mot de passe */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fw-semibold">
                        <i className="pi pi-lock me-2 text-primary"></i>
                        Mot de passe
                      </label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control form-control-lg rounded-start-3"
                          id="password"
                          name="password"
                          placeholder="Votre mot de passe"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary rounded-end-3"
                          onClick={togglePasswordVisibility}
                        >
                          <i className={`pi ${showPassword ? 'pi-eye-slash' : 'pi-eye'}`}></i>
                        </button>
                      </div>
                    </div>

                    

                    {/* Bouton de connexion */}
                    <div className="d-grid mb-3">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg rounded-3"
                        disabled={isLoading}
                        onClick={handleSubmit}
                      >
                        {isLoading ? (
                          <>
                            <i className="pi pi-spinner pi-spin me-2"></i>
                            Connexion en cours...
                          </>
                        ) : (
                          <>
                            <i className="pi pi-sign-in me-2"></i>
                            Se connecter
                          </>
                        )}
                      </button>
                    </div>


                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="text-center mt-4">
                <p className="text-muted small">
                  <i className="pi pi-shield-check me-1"></i>
                  Vos données sont protégées et sécurisées
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;