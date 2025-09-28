import React, { useState, useRef } from 'react';

const GalleryPhotosScreen = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      title: 'Conférence de presse',
      category: 'Événements',
      description: 'Conférence de presse du directeur général',
      image: 'https://via.placeholder.com/300x200/007bff/fff?text=Photo+1'
    },
    {
      id: 2,
      title: 'Studio radio',
      category: 'Installations',
      description: '',
      image: 'https://via.placeholder.com/300x200/28a745/fff?text=Photo+2'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: null
  });

  const fileInputRef = useRef(null);
  const categories = ['Événements', 'Installations', 'Personnel', 'Activités', 'Autres'];

  // Reset form
  const resetForm = () => {
    setFormData({ title: '', category: '', description: '', image: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Open create modal
  const openCreateModal = () => {
    resetForm();
    setEditMode(false);
    setSelectedPhoto(null);
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (photo) => {
    setFormData({
      title: photo.title,
      category: photo.category,
      description: photo.description || '',
      image: null
    });
    setSelectedPhoto(photo);
    setEditMode(true);
    setShowModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  // Save photo (create or update)
  const savePhoto = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.category.trim()) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    if (!editMode && !formData.image) {
      alert('Veuillez sélectionner une image');
      return;
    }

    const photoData = {
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      image: formData.image ? URL.createObjectURL(formData.image) : selectedPhoto?.image
    };

    if (editMode) {
      setPhotos(photos.map(photo => 
        photo.id === selectedPhoto.id ? { ...photo, ...photoData } : photo
      ));
    } else {
      setPhotos([...photos, { ...photoData, id: Date.now() }]);
    }

    setShowModal(false);
    resetForm();
  };

  // Delete photo
  const deletePhoto = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) {
      setPhotos(photos.filter(photo => photo.id !== id));
    }
  };

  return (
    <>
      
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h2 className="mb-2">
              <i className="pi pi-images text-success me-2"></i>
              Galerie Photos
            </h2>
            <p className="text-muted">Gérer les photos de la galerie O.N.P.R</p>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-success" onClick={openCreateModal}>
              <i className="pi pi-plus me-2"></i>Ajouter une photo
            </button>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="row">
          {photos.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="pi pi-image text-muted" style={{fontSize: '4rem'}}></i>
              <h4 className="text-muted mt-3">Aucune photo</h4>
              <p className="text-muted">Commencez par ajouter votre première photo</p>
            </div>
          ) : (
            photos.map((photo) => (
              <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="position-relative">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="card-img-top"
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <span className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-primary">{photo.category}</span>
                    </span>
                  </div>
                  <div className="card-body p-3">
                    <h6 className="card-title fw-bold text-truncate">{photo.title}</h6>
                    {photo.description && (
                      <p className="card-text text-muted small text-truncate" style={{maxHeight: '40px'}}>
                        {photo.description}
                      </p>
                    )}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted">
                        <i className="pi pi-calendar me-1"></i>
                        Aujourd'hui
                      </small>
                      <div>
                        <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => openEditModal(photo)}
                        >
                          <i className="pi pi-pencil"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deletePhoto(photo.id)}
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
                      {editMode ? 'Modifier la photo' : 'Ajouter une photo'}
                    </h5>
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  
                  <div onSubmit={savePhoto}>
                    <div className="modal-body">
                      <div className="row">
                        {/* Image Upload */}
                        <div className="col-md-12 mb-3">
                          <label className="form-label fw-semibold">
                            Image <span className="text-danger">*</span>
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

                        {/* Title */}
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
                            placeholder="Titre de la photo"
                            required
                          />
                        </div>

                        {/* Category */}
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
                            placeholder="Description de la photo..."
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
                        className="btn btn-success"
                        onClick={savePhoto}
                      >
                        <i className={`pi ${editMode ? 'pi-check' : 'pi-plus'} me-2`}></i>
                        {editMode ? 'Modifier' : 'Ajouter'}
                      </button>
                    </div>
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

export default GalleryPhotosScreen;