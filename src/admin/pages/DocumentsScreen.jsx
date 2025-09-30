import React, { useState, useRef } from 'react';

const DocumentsScreen = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: 'Rapport Annuel 2023',
      category: 'Rapports',
      description: 'Rapport d\'activités annuel de l\'Office National de la Presse et de la Radio',
      file: null,
      fileName: 'rapport_annuel_2023.pdf',
      fileSize: '2.5 MB',
      fileType: 'PDF',
      isPublic: true,
      publishDate: '2024-01-15',
      downloads: 127
    },
    {
      id: 2,
      title: 'Règlement Intérieur',
      category: 'Règlements',
      description: 'Règlement intérieur mis à jour',
      file: null,
      fileName: 'reglement_interieur.pdf',
      fileSize: '1.2 MB',
      fileType: 'PDF',
      isPublic: false,
      publishDate: '2024-02-01',
      downloads: 45
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    file: null,
    isPublic: true
  });

  const fileInputRef = useRef(null);
  const categories = ['Rapports', 'Règlements', 'Communiqués', 'Procédures', 'Directives', 'Publications', 'Autres'];
  const allowedTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'];

  // Get file icon based on type
  const getFileIcon = (fileName) => {
    if (!fileName) return 'pi pi-file';
    const ext = fileName.toLowerCase().split('.').pop();
    switch (ext) {
      case 'pdf': return 'pi pi-file-pdf';
      case 'doc':
      case 'docx': return 'pi pi-file-word';
      case 'xls':
      case 'xlsx': return 'pi pi-file-excel';
      case 'ppt':
      case 'pptx': return 'pi pi-file';
      default: return 'pi pi-file';
    }
  };

  // Get file type color
  const getFileTypeColor = (fileName) => {
    if (!fileName) return 'secondary';
    const ext = fileName.toLowerCase().split('.').pop();
    switch (ext) {
      case 'pdf': return 'danger';
      case 'doc':
      case 'docx': return 'primary';
      case 'xls':
      case 'xlsx': return 'success';
      case 'ppt':
      case 'pptx': return 'warning';
      default: return 'secondary';
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (!bytes) return 'N/A';
    if (typeof bytes === 'string') return bytes;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      file: null,
      isPublic: true
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Open create modal
  const openCreateModal = () => {
    resetForm();
    setEditMode(false);
    setSelectedDoc(null);
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (doc) => {
    setFormData({
      title: doc.title,
      category: doc.category,
      description: doc.description || '',
      file: null,
      isPublic: doc.isPublic
    });
    setSelectedDoc(doc);
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
      // Validate file type
      const fileExt = '.' + file.name.toLowerCase().split('.').pop();
      if (!allowedTypes.includes(fileExt)) {
        alert(`Type de fichier non autorisé. Types acceptés: ${allowedTypes.join(', ')}`);
        e.target.value = '';
        return;
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Le fichier ne doit pas dépasser 10 MB');
        e.target.value = '';
        return;
      }
      
      setFormData(prev => ({ ...prev, file }));
    }
  };

  // Toggle document visibility
  const toggleDocVisibility = (id) => {
    setDocuments(documents.map(doc => 
      doc.id === id ? { ...doc, isPublic: !doc.isPublic } : doc
    ));
  };

  // Save document (create or update)
  const saveDocument = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.category.trim()) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    if (!editMode && !formData.file) {
      alert('Veuillez sélectionner un fichier');
      return;
    }

    const docData = {
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      isPublic: formData.isPublic,
      publishDate: new Date().toISOString().split('T')[0]
    };

    if (formData.file) {
      docData.fileName = formData.file.name;
      docData.fileSize = formatFileSize(formData.file.size);
      docData.fileType = formData.file.name.toLowerCase().split('.').pop().toUpperCase();
      docData.file = formData.file;
    }

    if (editMode) {
      setDocuments(documents.map(doc => 
        doc.id === selectedDoc.id ? { ...doc, ...docData } : doc
      ));
    } else {
      setDocuments([...documents, { 
        ...docData, 
        id: Date.now(), 
        downloads: 0 
      }]);
    }

    setShowModal(false);
    resetForm();
  };

  // Delete document
  const deleteDocument = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
      setDocuments(documents.filter(doc => doc.id !== id));
    }
  };

  // Download simulation
  const downloadDocument = (doc) => {
    setDocuments(documents.map(d => 
      d.id === doc.id ? { ...d, downloads: d.downloads + 1 } : d
    ));
    alert(`Téléchargement de "${doc.fileName}" simulé`);
  };

  return (
    <>
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h2 className="mb-2">
              <i className="pi pi-file-pdf text-danger me-2"></i>
              Documents O.N.P.R
            </h2>
            <p className="text-muted">Gérer les documents officiels et publications</p>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-danger" onClick={openCreateModal}>
              <i className="pi pi-plus me-2"></i>Publier document
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-success">{documents.filter(doc => doc.isPublic).length}</div>
                <small className="text-muted">Documents publics</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-warning">{documents.filter(doc => !doc.isPublic).length}</div>
                <small className="text-muted">Documents privés</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-info">{documents.reduce((sum, doc) => sum + doc.downloads, 0)}</div>
                <small className="text-muted">Total téléchargements</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="fw-bold h4 text-primary">{documents.length}</div>
                <small className="text-muted">Total documents</small>
              </div>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="row">
          {documents.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="pi pi-file-pdf text-muted" style={{fontSize: '4rem'}}></i>
              <h4 className="text-muted mt-3">Aucun document</h4>
              <p className="text-muted">Commencez par publier votre premier document</p>
            </div>
          ) : (
            documents.map((doc) => (
              <div key={doc.id} className="col-12 mb-3">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* File Icon */}
                      <div className="col-md-1 text-center">
                        <i 
                          className={`${getFileIcon(doc.fileName)} text-${getFileTypeColor(doc.fileName)}`} 
                          style={{fontSize: '2.5rem'}}
                        ></i>
                      </div>
                      
                      {/* Document Info */}
                      <div className="col-md-6">
                        <div className="d-flex align-items-center mb-1">
                          <h6 className="fw-bold mb-0 me-2">{doc.title}</h6>
                          <span className={`badge bg-${getFileTypeColor(doc.fileName)}`}>
                            {doc.fileType || 'PDF'}
                          </span>
                          <span className="ms-2">
                            {doc.isPublic ? 
                              <span className="badge bg-success">Public</span> : 
                              <span className="badge bg-warning">Privé</span>
                            }
                          </span>
                        </div>
                        
                        <div className="text-muted small mb-2">
                          <span className="badge bg-light text-dark me-2">{doc.category}</span>
                          <i className="pi pi-file me-1"></i>{doc.fileName}
                          <span className="mx-2">•</span>
                          <i className="pi pi-clock me-1"></i>{doc.fileSize}
                        </div>
                        
                        {doc.description && (
                          <p className="text-muted small mb-0" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {doc.description}
                          </p>
                        )}
                      </div>
                      
                      {/* Stats */}
                      <div className="col-md-2 text-center">
                        <div className="small text-muted">
                          <div>
                            <i className="pi pi-download me-1"></i>
                            {doc.downloads} téléchargements
                          </div>
                          <div>
                            <i className="pi pi-calendar me-1"></i>
                            {new Date(doc.publishDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="col-md-3 text-end">
                        <div className="btn-group me-2">
                          <button 
                            className="btn btn-sm btn-outline-success"
                            onClick={() => downloadDocument(doc)}
                            title="Télécharger"
                          >
                            <i className="pi pi-download"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => openEditModal(doc)}
                            title="Modifier"
                          >
                            <i className="pi pi-pencil"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteDocument(doc.id)}
                            title="Supprimer"
                          >
                            <i className="pi pi-trash"></i>
                          </button>
                        </div>
                        
                        <div className="form-check form-switch d-inline-block">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={doc.isPublic}
                            onChange={() => toggleDocVisibility(doc.id)}
                            title="Public/Privé"
                          />
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
                      {editMode ? 'Modifier le document' : 'Publier un document'}
                    </h5>
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="row">
                      {/* File Upload */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          Fichier <span className="text-danger">*</span>
                        </label>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="form-control"
                          accept={allowedTypes.join(',')}
                          onChange={handleFileChange}
                          required={!editMode}
                        />
                        <small className="text-muted">
                          Types acceptés: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX (Max: 10 MB)
                        </small>
                        {editMode && (
                          <small className="text-muted d-block">Laissez vide pour conserver le fichier actuel</small>
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
                          placeholder="Titre du document"
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

                      {/* Visibility */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">Visibilité</label>
                        <div className="form-check form-switch mt-2">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="isPublic"
                            checked={formData.isPublic}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">
                            Document public (visible par tous)
                          </label>
                        </div>
                        {!formData.isPublic && (
                          <small className="text-muted">Document privé (accès restreint)</small>
                        )}
                      </div>

                      {/* Description */}
                      <div className="col-md-12 mb-3">
                        <label className="form-label fw-semibold">
                          Description <span className="text-muted">(optionnel)</span>
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="4"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Description détaillée du document, son contenu et son usage..."
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
                      className="btn btn-danger"
                      onClick={saveDocument}
                    >
                      <i className={`pi ${editMode ? 'pi-check' : 'pi-upload'} me-2`}></i>
                      {editMode ? 'Modifier' : 'Publier'}
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

export default DocumentsScreen;