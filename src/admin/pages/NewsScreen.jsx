import React, { useState } from 'react';

const NewsScreen = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Lancement de la nouvelle grille des programmes',
      category: 'Annonces',
      description: 'L\'ONPR annonce le lancement de sa nouvelle grille de programmes radio et télévision avec des émissions innovantes et des créneaux dédiés à l\'information locale.',
      isPublished: true,
      isFeatured: true, 
      publishDate: '2024-03-15',
      views: 1245,
      author: 'Direction ONPR'
    },
    {
      id: 2,
      title: 'Formation des journalistes en techniques de reportage',
      category: 'Formation',
      description: 'Un atelier de formation de trois jours organisé pour renforcer les capacités des journalistes de l\'ONPR en techniques de reportage moderne.',
      isPublished: false,
      isFeatured: false,
      publishDate: '2024-03-18',
      views: 0,
      author: 'Service Formation'
    },
    {
      id: 3,
      title: 'Acquisition de nouveaux équipements audiovisuels',
      category: 'Équipements',
      description: 'L\'office vient d\'acquérir de nouveaux équipements de diffusion pour améliorer la qualité des programmes.',
      isPublished: true,
      isFeatured: false,
      publishDate: '2024-03-10',
      views: 892,
      author: 'Service Technique'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    isPublished: false,
    isFeatured: false,
    author: ''
  });

  const categories = ['Annonces', 'Formation', 'Équipements', 'Événements', 'Partenariats', 'Personnel', 'Autres'];

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      isPublished: false,
      isFeatured: false,
      author: ''
    });
  };

  // Open create modal
  const openCreateModal = () => {
    resetForm();
    setEditMode(false);
    setSelectedNews(null);
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (article) => {
    setFormData({
      title: article.title,
      category: article.category,
      description: article.description,
      isPublished: article.isPublished,
      isFeatured: article.isFeatured,
      author: article.author
    });
    setSelectedNews(article);
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

  // Toggle publish status
  const togglePublishStatus = (id) => {
    setNews(news.map(article => 
      article.id === id ? { 
        ...article, 
        isPublished: !article.isPublished,
        publishDate: !article.isPublished ? new Date().toISOString().split('T')[0] : article.publishDate
      } : article
    ));
  };

  // Toggle featured status
  const toggleFeaturedStatus = (id) => {
    setNews(news.map(article => 
      article.id === id ? { ...article, isFeatured: !article.isFeatured } : article
    ));
  };

  // Save news (create or update)
  const saveNews = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.category.trim() || !formData.description.trim() || !formData.author.trim()) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const newsData = {
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      author: formData.author.trim(),
      isPublished: formData.isPublished,
      isFeatured: formData.isFeatured,
      publishDate: formData.isPublished ? new Date().toISOString().split('T')[0] : ''
    };

    if (editMode) {
      setNews(news.map(article => 
        article.id === selectedNews.id ? { ...article, ...newsData } : article
      ));
    } else {
      setNews([...news, { 
        ...newsData, 
        id: Date.now(),
        views: 0
      }]);
    }

    setShowModal(false);
    resetForm();
  };

  // Delete news
  const deleteNews = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette brève ?')) {
      setNews(news.filter(article => article.id !== id));
    }
  };

  // Get status badge
  const getStatusBadge = (article) => {
    if (!article.isPublished) {
      return <span className="badge bg-secondary">Brouillon</span>;
    }
    return <span className="badge bg-success">Publié</span>;
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Annonces': 'primary',
      'Formation': 'success',
      'Équipements': 'warning',
      'Événements': 'info',
      'Partenariats': 'purple',
      'Personnel': 'dark',
      'Autres': 'secondary'
    };
    return colors[category] || 'secondary';
  };

  return (
    <>
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h2 className="mb-2">
              <i className="pi pi-bookmark text-info me-2"></i>
              Brèves O.N.P.R
            </h2>
            <p className="text-muted">Gérer les actualités et communiqués de l'Office</p>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-info" onClick={openCreateModal}>
              <i className="pi pi-plus me-2"></i>Nouvelle brève
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-success">{news.filter(article => article.isPublished).length}</div>
                <small className="text-muted">Brèves publiées</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-secondary">{news.filter(article => !article.isPublished).length}</div>
                <small className="text-muted">Brouillons</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-warning">{news.filter(article => article.isFeatured).length}</div>
                <small className="text-muted">Brèves à la une</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-info">{news.reduce((sum, article) => sum + article.views, 0)}</div>
                <small className="text-muted">Total vues</small>
              </div>
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="row">
          {news.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="pi pi-bookmark text-muted" style={{fontSize: '4rem'}}></i>
              <h4 className="text-muted mt-3">Aucune brève</h4>
              <p className="text-muted">Commencez par rédiger votre première brève</p>
            </div>
          ) : (
            news.map((article) => (
              <div key={article.id} className="col-12 mb-3">
                <div className={`card border-0 shadow-sm ${article.isFeatured ? 'border-warning border-2' : ''}`}>
                  <div className="card-body">
                    <div className="row align-items-start">
                      {/* Featured indicator */}
                      <div className="col-md-1 text-center">
                        {article.isFeatured && (
                          <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-2" 
                               style={{width: '40px', height: '40px'}}>
                            <i className="pi pi-star text-white"></i>
                          </div>
                        )}
                        <i className="pi pi-bookmark text-info" style={{fontSize: '2rem'}}></i>
                      </div>
                      
                      {/* Article Content */}
                      <div className="col-md-7">
                        <div className="d-flex align-items-center mb-2">
                          <h5 className="fw-bold mb-0 me-3 flex-grow-1">{article.title}</h5>
                          {getStatusBadge(article)}
                          {article.isFeatured && (
                            <span className="badge bg-warning ms-2">À la une</span>
                          )}
                        </div>
                        
                        <div className="mb-2">
                          <span className={`badge bg-${getCategoryColor(article.category)} me-2`}>
                            {article.category}
                          </span>
                          <small className="text-muted">
                            <i className="pi pi-user me-1"></i>{article.author}
                          </small>
                        </div>
                        
                        <p className="text-muted mb-2" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: '1.4em',
                          maxHeight: '4.2em'
                        }}>
                          {article.description}
                        </p>
                        
                        <div className="small text-muted">
                          {article.isPublished && (
                            <>
                              <i className="pi pi-calendar me-1"></i>
                              Publié le {new Date(article.publishDate).toLocaleDateString()}
                              <span className="mx-2">•</span>
                              <i className="pi pi-eye me-1"></i>
                              {article.views} vues
                            </>
                          )}
                          {!article.isPublished && (
                            <>
                              <i className="pi pi-edit me-1"></i>
                              Brouillon non publié
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="col-md-4 text-end">
                        <div className="mb-3">
                          <div className="btn-group me-2">
                            <button 
                              className="btn btn-sm btn-outline-info"
                              onClick={() => openEditModal(article)}
                              title="Modifier"
                            >
                              <i className="pi pi-pencil"></i>
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => deleteNews(article.id)}
                              title="Supprimer"
                            >
                              <i className="pi pi-trash"></i>
                            </button>
                          </div>
                        </div>
                        
                        <div className="d-flex flex-column gap-2">
                          {/* Publish Toggle */}
                          <div className="form-check form-switch">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              checked={article.isPublished}
                              onChange={() => togglePublishStatus(article.id)}
                            />
                            <label className="form-check-label small">
                              {article.isPublished ? 'Publié' : 'Brouillon'}
                            </label>
                          </div>
                          
                          {/* Featured Toggle */}
                          <div className="form-check form-switch">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              checked={article.isFeatured}
                              onChange={() => toggleFeaturedStatus(article.id)}
                            />
                            <label className="form-check-label small">
                              À la une
                            </label>
                          </div>
                        </div>
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
                      {editMode ? 'Modifier la brève' : 'Nouvelle brève'}
                    </h5>
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="row">
                      {/* Title */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          Titre <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="Titre de la brève"
                          required
                        />
                      </div>

                      {/* Category & Author */}
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

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Auteur <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="author"
                          className="form-control"
                          value={formData.author}
                          onChange={handleInputChange}
                          placeholder="Nom de l'auteur ou service"
                          required
                        />
                      </div>

                      {/* Content */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          Contenu <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="6"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Rédigez le contenu de votre brève ici..."
                          required
                        />
                        <small className="text-muted">
                          Rédigez un contenu clair et informatif pour vos lecteurs
                        </small>
                      </div>

                      {/* Publication Options */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">Options de publication</label>
                        
                        <div className="form-check form-switch mt-2">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="isPublished"
                            checked={formData.isPublished}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">
                            Publier immédiatement
                          </label>
                        </div>
                        
                        <div className="form-check form-switch mt-2">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">
                            Mettre à la une (brève prioritaire)
                          </label>
                        </div>
                        
                        {!formData.isPublished && (
                          <small className="text-muted d-block mt-2">
                            La brève sera sauvegardée en tant que brouillon
                          </small>
                        )}
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
                      className="btn btn-info"
                      onClick={saveNews}
                    >
                      <i className={`pi ${editMode ? 'pi-check' : 'pi-save'} me-2`}></i>
                      {editMode ? 'Modifier' : (formData.isPublished ? 'Publier' : 'Sauvegarder')}
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

export default NewsScreen;