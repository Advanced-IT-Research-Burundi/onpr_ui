import React, { useState, useRef } from 'react';

const AdvertisingScreen = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      title: 'Banque Commerciale du Burundi',
      category: 'Banque',
      description: 'Prêts avantageux pour particuliers et entreprises',
      image: 'https://via.placeholder.com/400x200/007bff/fff?text=BCB',
      position: 'Header',
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 2,
      title: 'Télécom Plus',
      category: 'Télécommunications',
      description: 'Internet haut débit pour tous',
      image: 'https://via.placeholder.com/400x200/28a745/fff?text=Telecom',
      position: 'Sidebar',
      isActive: false,
      startDate: '2024-02-01',
      endDate: '2024-06-30'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: null,
    position: '',
    isActive: true,
    startDate: '',
    endDate: ''
  });

  const fileInputRef = useRef(null);
  const categories = ['Banque', 'Télécommunications', 'Commerce', 'Services', 'Immobilier', 'Éducation', 'Santé', 'Autres'];
  const positions = ['Header', 'Sidebar', 'Footer', 'Contenu', 'Pop-up'];

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      image: null,
      position: '',
      isActive: true,
      startDate: '',
      endDate: ''
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Open create modal
  const openCreateModal = () => {
    resetForm();
    setEditMode(false);
    setSelectedAd(null);
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (ad) => {
    setFormData({
      title: ad.title,
      category: ad.category,
      description: ad.description || '',
      image: null,
      position: ad.position,
      isActive: ad.isActive,
      startDate: ad.startDate,
      endDate: ad.endDate
    });
    setSelectedAd(ad);
    setEditMode(true);
    setShowModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  // Toggle ad status
  const toggleAdStatus = (id) => {
    setAds(ads.map(ad => 
      ad.id === id ? { ...ad, isActive: !ad.isActive } : ad
    ));
  };

  // Save ad (create or update)
  const saveAd = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.category.trim() || !formData.position.trim()) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    if (!editMode && !formData.image) {
      alert('Veuillez sélectionner une image');
      return;
    }

    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      alert('La date de fin doit être postérieure à la date de début');
      return;
    }

    const adData = {
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      position: formData.position,
      isActive: formData.isActive,
      startDate: formData.startDate,
      endDate: formData.endDate,
      image: formData.image ? URL.createObjectURL(formData.image) : selectedAd?.image
    };

    if (editMode) {
      setAds(ads.map(ad => 
        ad.id === selectedAd.id ? { ...ad, ...adData } : ad
      ));
    } else {
      setAds([...ads, { ...adData, id: Date.now() }]);
    }

    setShowModal(false);
    resetForm();
  };

  // Delete ad
  const deleteAd = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette publicité ?')) {
      setAds(ads.filter(ad => ad.id !== id));
    }
  };

  // Check if ad is expired
  const isExpired = (endDate) => {
    if (!endDate) return false;
    return new Date(endDate) < new Date();
  };

  // Get status badge
  const getStatusBadge = (ad) => {
    if (isExpired(ad.endDate)) {
      return <span className="badge bg-secondary">Expirée</span>;
    }
    return ad.isActive ? 
      <span className="badge bg-success">Active</span> : 
      <span className="badge bg-warning">Inactive</span>;
  };

  return (
    <>
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h2 className="mb-2">
              <i className="pi pi-megaphone text-warning me-2"></i>
              Espace Publicitaire
            </h2>
            <p className="text-muted">Gérer les publicités du site O.N.P.R</p>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-warning" onClick={openCreateModal}>
              <i className="pi pi-plus me-2"></i>Nouvelle publicité
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-success">{ads.filter(ad => ad.isActive && !isExpired(ad.endDate)).length}</div>
                <small className="text-muted">Publicités actives</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-warning">{ads.filter(ad => !ad.isActive).length}</div>
                <small className="text-muted">Publicités inactives</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-secondary">{ads.filter(ad => isExpired(ad.endDate)).length}</div>
                <small className="text-muted">Publicités expirées</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-primary">{ads.length}</div>
                <small className="text-muted">Total publicités</small>
              </div>
            </div>
          </div>
        </div>

        {/* Ads List */}
        <div className="row">
          {ads.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="pi pi-megaphone text-muted" style={{fontSize: '4rem'}}></i>
              <h4 className="text-muted mt-3">Aucune publicité</h4>
              <p className="text-muted">Commencez par créer votre première publicité</p>
            </div>
          ) : (
            ads.map((ad) => (
              <div key={ad.id} className="col-lg-6 col-xl-4 mb-4">
                <div className={`card border-0 shadow-sm h-100 ${isExpired(ad.endDate) ? 'opacity-75' : ''}`}>
                  <div className="position-relative">
                    <img 
                      src={ad.image} 
                      alt={ad.title}
                      className="card-img-top"
                      style={{height: '150px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 start-0 m-2">
                      {getStatusBadge(ad)}
                    </div>
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-dark">{ad.position}</span>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title fw-bold mb-0 text-truncate flex-grow-1 me-2">{ad.title}</h6>
                      <span className="badge bg-light text-dark small">{ad.category}</span>
                    </div>
                    
                    {ad.description && (
                      <p className="card-text text-muted small mb-2" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {ad.description}
                      </p>
                    )}
                    
                    {(ad.startDate || ad.endDate) && (
                      <div className="small text-muted mb-3">
                        <i className="pi pi-calendar me-1"></i>
                        {ad.startDate && `Du ${new Date(ad.startDate).toLocaleDateString()}`}
                        {ad.startDate && ad.endDate && ' au '}
                        {ad.endDate && `${new Date(ad.endDate).toLocaleDateString()}`}
                      </div>
                    )}
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={ad.isActive && !isExpired(ad.endDate)}
                          disabled={isExpired(ad.endDate)}
                          onChange={() => toggleAdStatus(ad.id)}
                        />
                        <label className="form-check-label small text-muted">
                          {ad.isActive && !isExpired(ad.endDate) ? 'Active' : 'Inactive'}
                        </label>
                      </div>
                      <div>
                        <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => openEditModal(ad)}
                        >
                          <i className="pi pi-pencil"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteAd(ad.id)}
                        >
                          <i className="pi pi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <>
            <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      <i className={`pi ${editMode ? 'pi-pencil' : 'pi-plus'} me-2`}></i>
                      {editMode ? 'Modifier la publicité' : 'Nouvelle publicité'}
                    </h5>
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="row">
                      {/* Image Upload */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          Image publicitaire <span className="text-danger">*</span>
                        </label>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="form-control"
                          accept="image/*"
                          onChange={handleFileChange}
                          required={!editMode}
                        />
                        {editMode && (
                          <small className="text-muted">Laissez vide pour conserver l'image actuelle</small>
                        )}
                      </div>

                      {/* Title & Category */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Titre <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="Nom de l'annonceur ou titre"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Catégorie <span className="text-danger">*</span>
                        </label>
                        <select
                          name="category"
                          className="form-select"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Sélectionner une catégorie</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      {/* Position & Status */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Position <span className="text-danger">*</span>
                        </label>
                        <select
                          name="position"
                          className="form-select"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Sélectionner une position</option>
                          {positions.map((pos) => (
                            <option key={pos} value={pos}>{pos}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Statut</label>
                        <div className="form-check form-switch mt-2">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">
                            Publicité active
                          </label>
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Date de début <span className="text-muted">(optionnel)</span>
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          className="form-control"
                          value={formData.startDate}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Date de fin <span className="text-muted">(optionnel)</span>
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          className="form-control"
                          value={formData.endDate}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Description */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          Description <span className="text-muted">(optionnel)</span>
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="3"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Description de la publicité ou message promotionnel..."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-footer">
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={() => setShowModal(false)}
                    >
                      Annuler
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-warning"
                      onClick={saveAd}
                    >
                      <i className={`pi ${editMode ? 'pi-check' : 'pi-plus'} me-2`}></i>
                      {editMode ? 'Modifier' : 'Créer'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AdvertisingScreen;