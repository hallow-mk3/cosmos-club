import React, { useState, useEffect } from 'react';
import { basePhotos, weeklyUpdatePhotos, type GalleryPhoto } from '../data/spaceData';
import { Search, Camera, Calendar, ArrowRight, Download, PlusCircle, Check } from 'lucide-react';

interface APODData {
  title: string;
  explanation: string;
  url: string;
  copyright?: string;
  date: string;
}

export const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(basePhotos);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryPhoto | null>(null);
  
  // Weekly update state
  const [weeklyUpdated, setWeeklyUpdated] = useState(false);

  // APOD State
  const [apod, setApod] = useState<APODData | null>(null);
  const [apodLoading, setApodLoading] = useState(true);

  // NASA APOD API Fetch
  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        if (!res.ok) throw new Error('NASA API limit or offline');
        return res.json();
      })
      .then(data => {
        setApod({
          title: data.title,
          explanation: data.explanation,
          url: data.url,
          copyright: data.copyright || 'NASA Public Domain',
          date: data.date
        });
        setApodLoading(false);
      })
      .catch(() => {
        // High fidelity fallback APOD
        setApod({
          title: 'The Mystic Mountain (Carina Nebula Fallback)',
          explanation: 'This craggy cosmic pinnacle lying within a tempestuous stellar nursery called the Carina Nebula, located 7,500 light-years away, is captured here by Hubble.',
          url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
          copyright: 'NASA / ESA / Hubble Heritage',
          date: '2026-07-20'
        });
        setApodLoading(false);
      });
  }, []);

  // Trigger Weekly photo loader
  const triggerWeeklyUpdate = () => {
    if (weeklyUpdated) return;
    setPhotos([...photos, ...weeklyUpdatePhotos]);
    setWeeklyUpdated(true);
  };

  // Filtered photos
  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || photo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Nebula', 'Galaxy', 'Planet', 'Deep Space', 'Telescope'];

  return (
    <div style={{ padding: '3rem 0' }}>
      
      {/* APOD Section */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>NASA Picture of the Day</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Direct astrophysical feed from NASA planetary observations.</p>
        </div>

        {apodLoading ? (
          <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--card-radius)' }}>
            Loading astronomical feed...
          </div>
        ) : apod && (
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', padding: '1.5rem', overflow: 'hidden' }}>
            <div style={{ height: '350px', backgroundColor: '#000', borderRadius: 'var(--card-radius)', overflow: 'hidden' }}>
              <img src={apod.url} alt={apod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  <Calendar size={14} /> NASA APOD ● {apod.date}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.8rem' }}>{apod.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', overflowY: 'auto', maxHeight: '180px' }}>
                  {apod.explanation}
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span><strong>Copyright:</strong> {apod.copyright}</span>
                <a href={apod.url} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem', display: 'flex', gap: '0.4rem', fontSize: '0.75rem' }}>
                  View Full Image <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)' }}>Celestial Gallery</h2>
            <p style={{ color: 'var(--text-secondary)' }}>An archive of deep space exploration, nebulae formations, and planetary surveys.</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Weekly photo simulator */}
            <button
              onClick={triggerWeeklyUpdate}
              className={`btn ${weeklyUpdated ? 'btn-secondary' : 'btn-primary'}`}
              style={{ padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', display: 'flex', gap: '0.4rem', border: '1px solid var(--border-color)' }}
              disabled={weeklyUpdated}
            >
              {weeklyUpdated ? (
                <>
                  <Check size={16} /> Weekly Catalog Updated (+21 Photos)
                </>
              ) : (
                <>
                  <PlusCircle size={16} /> Trigger Weekly Update (+21 Photos)
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter bar & Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', borderRadius: '15px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              className="form-control"
              placeholder="Search nebula, galaxy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '2.5rem', borderRadius: '20px' }}
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid-cols-3">
          {filteredPhotos.map(photo => (
            <div 
              key={photo.id} 
              className="gallery-card"
              onClick={() => setActiveLightbox(photo)}
            >
              <img src={photo.url} alt={photo.title} className="gallery-image" loading="lazy" />
              <div className="gallery-overlay">
                <h4 className="gallery-title">{photo.title}</h4>
                <p style={{ color: '#ccc', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Camera size={12} /> {photo.photographer}
                </p>
                <span className="gallery-category">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            No images match your search.
          </div>
        )}
      </div>

      {/* Lightbox / Zoom Modal */}
      {activeLightbox && (
        <div className="modal-overlay" onClick={() => setActiveLightbox(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveLightbox(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image-container">
                <img src={activeLightbox.url} alt={activeLightbox.title} className="modal-image" />
              </div>
              <div className="modal-info">
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-color)', fontWeight: 700 }}>
                    {activeLightbox.category}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginTop: '0.3rem', marginBottom: '1rem' }}>
                    {activeLightbox.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {activeLightbox.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <div><strong>Photographer:</strong> {activeLightbox.photographer}</div>
                    <div><strong>Date Archived:</strong> {activeLightbox.date}</div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                  <a 
                    href={activeLightbox.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1, fontSize: '0.85rem' }}
                  >
                    <Download size={14} /> Full Resolution
                  </a>
                  <button 
                    onClick={() => setActiveLightbox(null)}
                    className="btn btn-secondary"
                    style={{ flex: 1, fontSize: '0.85rem' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PhotoGallery;
