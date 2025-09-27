import React from 'react';

const DashboardScreen = () => {
    return (
        <div>
                {/* En-tête de la page */}
                <div className="row mb-4">
                  <div className="col">
                    <h2 className="mb-2">Tableau de bord O.N.P.R</h2>
                    <p className="text-muted">Gestion du contenu du site officiel</p>
                  </div>
                </div>

                {/* Cards des sections principales */}
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-flex">
                          <i className="pi pi-images text-success" style={{fontSize: '2rem'}}></i>
                        </div>
                        <h5 className="card-title">Galerie Photos</h5>
                        <p className="text-muted small mb-3">Gérer les images et albums photos</p>
                        <button className="btn btn-success btn-sm">
                          <i className="pi pi-plus me-2"></i>Ajouter des photos
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="bg-primary bg-opacity-10 rounded-3 p-3 mb-3 d-inline-flex">
                          <i className="pi pi-video text-primary" style={{fontSize: '2rem'}}></i>
                        </div>
                        <h5 className="card-title">Galerie Vidéos</h5>
                        <p className="text-muted small mb-3">Gérer les vidéos et contenus multimédias</p>
                        <button className="btn btn-primary btn-sm">
                          <i className="pi pi-plus me-2"></i>Ajouter des vidéos
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="bg-warning bg-opacity-10 rounded-3 p-3 mb-3 d-inline-flex">
                          <i className="pi pi-megaphone text-warning" style={{fontSize: '2rem'}}></i>
                        </div>
                        <h5 className="card-title">Espace Publicitaire</h5>
                        <p className="text-muted small mb-3">Gérer les annonces et publicités</p>
                        <button className="btn btn-warning btn-sm">
                          <i className="pi pi-plus me-2"></i>Nouvelle annonce
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="bg-danger bg-opacity-10 rounded-3 p-3 mb-3 d-inline-flex">
                          <i className="pi pi-file-pdf text-danger" style={{fontSize: '2rem'}}></i>
                        </div>
                        <h5 className="card-title">Documents</h5>
                        <p className="text-muted small mb-3">Gérer les documents officiels et publications</p>
                        <button className="btn btn-danger btn-sm">
                          <i className="pi pi-upload me-2"></i>Publier document
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="bg-info bg-opacity-10 rounded-3 p-3 mb-3 d-inline-flex">
                          <i className="pi pi-bookmark text-info" style={{fontSize: '2rem'}}></i>
                        </div>
                        <h5 className="card-title">Brèves O.N.P.R</h5>
                        <p className="text-muted small mb-3">Publier les actualités et communiqués</p>
                        <button className="btn btn-info btn-sm">
                          <i className="pi pi-pencil me-2"></i>Rédiger une brève
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistiques rapides */}
                <div className="row mt-4">
                  <div className="col">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-transparent border-bottom">
                        <h6 className="card-title mb-0">
                          <i className="pi pi-chart-bar me-2 text-primary"></i>
                          Aperçu des contenus
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="row text-center">
                          <div className="col-md-3 border-end">
                            <div className="fw-bold h4 text-success">245</div>
                            <small className="text-muted">Photos publiées</small>
                          </div>
                          <div className="col-md-3 border-end">
                            <div className="fw-bold h4 text-primary">32</div>
                            <small className="text-muted">Vidéos en ligne</small>
                          </div>
                          <div className="col-md-3 border-end">
                            <div className="fw-bold h4 text-warning">18</div>
                            <small className="text-muted">Annonces actives</small>
                          </div>
                          <div className="col-md-3">
                            <div className="fw-bold h4 text-info">127</div>
                            <small className="text-muted">Brèves publiées</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
}

export default DashboardScreen;
