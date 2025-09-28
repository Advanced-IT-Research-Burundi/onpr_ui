import React, { useState } from 'react';

const GalleryVideosScreen = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Interview du Directeur Général',
      category: 'Interviews',
      description: 'Interview exclusive avec le DG de l\'ONPR sur les nouvelles orientations',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Émission matinale',
      category: 'Émissions',
      description: '',
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    videoUrl: ''
  });

  const categories = ['Interviews', 'Émissions', 'Actualités', 'Documentaires', 'Événements', 'Autres'];

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url?.match(regex);
    return match ? match[1] : null;
  };

  // Get YouTube thumbnail
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // Reset form
  const resetForm = () => {
    setFormData({ title: '', category: '', description: '', videoUrl: '' });
  };

  // Open create modal
  const openCreateModal = () => {
    resetForm();
    setEditMode(false);
    setSelectedVideo(null);
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (video) => {
    setFormData({
      title: video.title,
      category: video.category,
      description: video.description || '',
      videoUrl: video.videoUrl
    });
    setSelectedVideo(video);
    setEditMode(true);
    setShowModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validate YouTube URL
  const isValidYouTubeUrl = (url) => {
    return getYouTubeId(url) !== null;
  };

  // Save video (create or update)
  const saveVideo = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.category.trim() || !formData.videoUrl.trim()) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    if (!isValidYouTubeUrl(formData.videoUrl)) {
      alert('Veuillez entrer un lien YouTube valide');
      return;
    }

    const videoData = {
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      videoUrl: formData.videoUrl.trim()
    };

    if (editMode) {
      setVideos(videos.map(video => 
        video.id === selectedVideo.id ? { ...video, ...videoData } : video
      ));
    } else {
      setVideos([...videos, { ...videoData, id: Date.now() }]);
    }

    setShowModal(false);
    resetForm();
  };

  // Delete video
  const deleteVideo = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette vidéo ?')) {
      setVideos(videos.filter(video => video.id !== id));
    }
  };

  return (
    <>
     
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h2 className="mb-2">
              <i className="pi pi-video text-primary me-2"></i>
              Galerie Vidéos
            </h2>
            <p className="text-muted">Gérer les vidéos YouTube de l'O.N.P.R</p>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-primary" onClick={openCreateModal}>
              <i className="pi pi-plus me-2"></i>Ajouter une vidéo
            </button>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="row">
          {videos.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="pi pi-video text-muted" style={{fontSize: '4rem'}}></i>
              <h4 className="text-muted mt-3">Aucune vidéo</h4>
              <p className="text-muted">Commencez par ajouter votre première vidéo YouTube</p>
            </div>
          ) : (
            videos.map((video) => (
              <div key={video.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="position-relative">
                    {getYouTubeThumbnail(video.videoUrl) ? (
                      <div className="position-relative">
                        <img 
                          src={getYouTubeThumbnail(video.videoUrl)} 
                          alt={video.title}
                          className="card-img-top"
                          style={{height: '200px', objectFit: 'cover'}}
                        />
                        <div className="position-absolute top-50 start-50 translate-middle">
                          <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center" 
                               style={{width: '60px', height: '60px', cursor: 'pointer'}}
                               onClick={() => window.open(video.videoUrl, '_blank')}>
                            <i className="pi pi-play text-white" style={{fontSize: '1.5rem', marginLeft: '3px'}}></i>
                          </div>
                        </div>
                        <span className="position-absolute top-0 end-0 m-2">
                          <span className="badge bg-primary">{video.category}</span>
                        </span>
                        <span className="position-absolute bottom-0 start-0 m-2">
                          <span className="badge bg-danger">
                            <i className="pi pi-youtube me-1"></i>YouTube
                          </span>
                        </span>
                      </div>
                    ) : (
                      <div className="card-img-top bg-light d-flex align-items-center justify-content-center" 
                           style={{height: '200px'}}>
                        <i className="pi pi-video text-muted" style={{fontSize: '3rem'}}></i>
                      </div>
                    )}
                  </div>
                  <div className="card-body p-3">
                    <h6 className="card-title fw-bold text-truncate">{video.title}</h6>
                    {video.description && (
                      <p className="card-text text-muted small" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {video.description}
                      </p>
                    )}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted">
                        <i className="pi pi-calendar me-1"></i>
                        Aujourd'hui
                      </small>
                      <div>
                        <button 
                          className="btn btn-sm btn-outline-success me-2"
                          onClick={() => window.open(video.videoUrl, '_blank')}
                          title="Voir sur YouTube"
                        >
                          <i className="pi pi-external-link"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => openEditModal(video)}
                        >
                          <i className="pi pi-pencil"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteVideo(video.id)}
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
                      {editMode ? 'Modifier la vidéo' : 'Ajouter une vidéo'}
                    </h5>
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="row">
                      {/* YouTube URL */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          <i className="pi pi-youtube me-1 text-danger"></i>
                          Lien YouTube <span className="text-danger">*</span>
                        </label>
                        <input
                          type="url"
                          name="videoUrl"
                          className="form-control"
                          value={formData.videoUrl}
                          onChange={handleInputChange}
                          placeholder="https://www.youtube.com/watch?v=..."
                          required
                        />
                        <small className="text-muted">Collez le lien complet de la vidéo YouTube</small>
                        
                        {/* Preview */}
                        {formData.videoUrl && isValidYouTubeUrl(formData.videoUrl) && (
                          <div className="mt-3">
                            <div className="border rounded p-2">
                              <small className="text-success fw-semibold d-block mb-2">
                                <i className="pi pi-check-circle me-1"></i>Aperçu de la vidéo :
                              </small>
                              <div className="ratio ratio-16x9">
                                <iframe 
                                  src={getYouTubeEmbedUrl(formData.videoUrl)}
                                  title="Video preview"
                                  className="rounded"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {formData.videoUrl && !isValidYouTubeUrl(formData.videoUrl) && (
                          <small className="text-danger">
                            <i className="pi pi-exclamation-triangle me-1"></i>
                            Lien YouTube invalide
                          </small>
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
                          placeholder="Titre de la vidéo"
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
                          placeholder="Description de la vidéo..."
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
                      className="btn btn-primary"
                      onClick={saveVideo}
                      disabled={formData.videoUrl && !isValidYouTubeUrl(formData.videoUrl)}
                    >
                      <i className={`pi ${editMode ? 'pi-check' : 'pi-plus'} me-2`}></i>
                      {editMode ? 'Modifier' : 'Ajouter'}
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

export default GalleryVideosScreen;