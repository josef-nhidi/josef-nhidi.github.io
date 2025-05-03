// Sample image data
let images = []
const path = window.location.pathname;
if (path.includes("portfolio1.html")) {
  images = [
    { url: 'images/nature/portfolio2.webp', thumbnail: 'images/nature/portfolio2.webp', feature: 'feature-large',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?",title:"Barrada"},
    { url: 'images/nature/IMG_0583.webp', thumbnail: 'images/nature/IMG_0583.webp' ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?",title:"Barrada"},
    { url: 'images/nature/IMG_0600.webp', thumbnail: 'images/nature/IMG_0600.webp',feature : 'feature-tall' ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?",title:"Barrada"},
    { url: 'images/nature/IMG_0597.webp', thumbnail: 'images/nature/IMG_0597.webp',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?",title:"Barrada"}
  ];}
  else if (path.includes("portfolio2.html")) {
    images = [
      { url: 'images/portraits/a.webp', thumbnail: 'images/portraits/a.webp',feature:'feature-tall',title:"WASSIM",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?" },
      { url: 'images/portraits/b.webp', thumbnail: 'images/portraits/b.webp',title:"WASSIM",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?"  },
      { url: 'images/portraits/c.webp', thumbnail: 'images/portraits/c.webp',feature:'feature-large',title:"WASSIM",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?"  },
      { url: 'images/portraits/d.webp', thumbnail: 'images/portraits/d.webp',title:"WASSIM",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?"  }
    ];} 
  else if (path.includes("portfolio3.html")) {
    images = [
      { url: 'images/city/a.webp', thumbnail: 'images/city/a.webp',feature:'feature-tall', title:"Sfax",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?" },
      { url: 'images/city/b.webp', thumbnail: 'images/city/b.webp', title:"Sfax",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?"},
      { url: 'images/city/c.webp', thumbnail: 'images/city/c.webp',feature:'feature-large',title:"Sfax",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?" },
      { url: 'images/city/d.webp', thumbnail: 'images/city/d.webp',title:"Sfax",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum dolore quam necessitatibus ipsa eveniet eum aperiam, sed vel doloremque ex consequuntur vero ab tenetur culpa ipsum veritatis et. Quas?" }
    ];} 
  else if (path.includes("portfolio4.html")){
    images = [
      { url: 'images/art/a.webp', thumbnail: 'images/art/a.webp', feature: 'feature-large'},
    { url: 'images/art/b.webp', thumbnail: 'images/art/b.webp' },
    { url: 'images/art/c.webp', thumbnail: 'images/art/c.webp',feature : 'feature-wide' },
    { url: 'images/art/d.webp', thumbnail: 'images/art/d.webp'}
    ];}
  else if (path.includes("portfolio5.html")){
    images = [
      { url: 'images/marketing/a.webp', thumbnail: 'images/marketing/a.webp', feature: 'feature-large'},
    { url: 'images/marketing/b.webp', thumbnail: 'images/marketing/b.webp' },
    { url: 'images/marketing/c.webp', thumbnail: 'images/marketing/c.webp',feature : 'feature-tall' },
    { url: 'images/marketing/d.webp', thumbnail: 'images/marketing/d.webp',}
    ];}

// Create the gallery with all images
function createGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  
  images.forEach((image, index) => {
    const item = createGalleryItem(image, index);
    gallery.appendChild(item);
  });
}

// Create a single gallery item
function createGalleryItem(image, index) {
  const item = document.createElement('div');
  item.className = `gallery-item ${image.feature || ''}`;
  item.dataset.index = index;
  
  const img = document.createElement('img');
  img.className = 'gallery-item-image blur-up';
  img.alt = image.title;
  img.src = image.thumbnail || image.url;
  img.classList.add('image-loading');
  
  img.onload = () => {
    img.classList.remove('image-loading');
    setTimeout(() => {
      img.classList.add('loaded');
      if (image.thumbnail) {
        const fullImg = new Image();
        fullImg.onload = () => {
          img.src = image.url;
        };
        fullImg.src = image.url;
      }
    }, 100);
  };
  
  const info = document.createElement('div');
  info.className = 'gallery-item-info';
  
  const title = document.createElement('h3');
  title.className = 'gallery-item-title';
  title.textContent = image.title;
  
  const description = document.createElement('p');
  description.className = 'gallery-item-description';
  description.textContent = image.description;
  
  info.appendChild(title);
  info.appendChild(description);
  item.appendChild(img);
  item.appendChild(info);
  
  item.addEventListener('click', () => {
    openImageViewer(index);
  });
  
  return item;
}

// Setup the image viewer
function setupImageViewer() {
  const viewer = document.getElementById('image-viewer');
  const closeBtn = document.getElementById('viewer-close');
  const prevBtn = document.getElementById('viewer-prev');
  const nextBtn = document.getElementById('viewer-next');
  
  closeBtn.addEventListener('click', closeImageViewer);
  prevBtn.addEventListener('click', () => navigateImage(-1));
  nextBtn.addEventListener('click', () => navigateImage(1));
  
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) {
      closeImageViewer();
    }
  });
  
  document.addEventListener('keydown', (event) => {
    if (!viewer.classList.contains('active')) return;
    
    if (event.key === 'Escape') {
      closeImageViewer();
    } else if (event.key === 'ArrowLeft') {
      navigateImage(-1);
    } else if (event.key === 'ArrowRight') {
      navigateImage(1);
    }
  });
  
  let touchStartX = 0;
  let touchEndX = 0;
  
  viewer.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });
  
  viewer.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const threshold = 50;
    if (touchEndX - touchStartX > threshold) {
      navigateImage(-1);
    } else if (touchStartX - touchEndX > threshold) {
      navigateImage(1);
    }
  }
}

function openImageViewer(index) {
  const viewer = document.getElementById('image-viewer');
  const viewerImage = document.getElementById('viewer-image');
  const viewerTitle = document.getElementById('viewer-title');
  const viewerDescription = document.getElementById('viewer-description');
  
  const image = images[index];
  viewerImage.src = image.url;
  viewerTitle.textContent = image.title;
  viewerDescription.textContent = image.description;
  viewer.dataset.currentIndex = index;
  
  viewer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
  const viewer = document.getElementById('image-viewer');
  viewer.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateImage(direction) {
  const viewer = document.getElementById('image-viewer');
  const viewerImage = document.getElementById('viewer-image');
  const currentIndex = parseInt(viewer.dataset.currentIndex);
  const newIndex = (currentIndex + direction + images.length) % images.length;
  
  const image = images[newIndex];
  
  viewerImage.style.opacity = '0';
  viewerImage.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    viewerImage.src = image.url;
    document.getElementById('viewer-title').textContent = image.title;
    document.getElementById('viewer-description').textContent = image.description;
    viewer.dataset.currentIndex = newIndex;
    
    viewerImage.onload = () => {
      viewerImage.style.opacity = '1';
      viewerImage.style.transform = 'scale(1)';
    };
  }, 300);
  
  preloadAdjacentImages(newIndex);
}

function preloadAdjacentImages(index) {
  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index - 1 + images.length) % images.length;
  
  new Image().src = images[nextIndex].url;
  new Image().src = images[prevIndex].url;
}


// Setup scroll animations
function setupScrollAnimations() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    galleryItems.forEach(item => {
      observer.observe(item);
    });
  } else {
    galleryItems.forEach(item => {
      item.classList.add('reveal');
    });
  }
}

// Setup view toggle (grid/list)
function setupViewToggle() {
  const viewToggle = document.getElementById('view-toggle');
  const gallery = document.getElementById('gallery');
  
  viewToggle.addEventListener('click', () => {
    if (gallery.classList.contains('grid-view')) {
      gallery.classList.remove('grid-view');
      gallery.classList.add('list-view');
      viewToggle.setAttribute('aria-label', 'Switch to grid view');
      localStorage.setItem('viewMode', 'list');
    } else {
      gallery.classList.remove('list-view');
      gallery.classList.add('grid-view');
      viewToggle.setAttribute('aria-label', 'Switch to list view');
      localStorage.setItem('viewMode', 'grid');
    }
  });
  
  const savedViewMode = localStorage.getItem('viewMode');
  if (savedViewMode === 'list') {
    gallery.classList.remove('grid-view');
    gallery.classList.add('list-view');
    viewToggle.setAttribute('aria-label', 'Switch to grid view');
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  createGallery();
  setupImageViewer();
  setupScrollAnimations();
  setupViewToggle();
});