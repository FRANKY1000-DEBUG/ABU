const popups = [
    { id: 1, interval: 160000 }, // Image popup 1
   
];

let currentPopupIndex = 0;
let popupInterval;

function showNextPopup() {
    // Pause any currently playing video popup
    document.querySelectorAll('.popup-video').forEach(video => {
        video.pause();
    });
    
    // Hide all popups
    popups.forEach(popup => {
        const el = document.getElementById(`popupOverlay${popup.id}`);
        if (el) el.style.display = 'none';
    });
    
    // Show current popup
    const current = popups[currentPopupIndex];
    const currentEl = document.getElementById(`popupOverlay${current.id}`);
    
    if (currentEl) {
        currentEl.style.display = 'flex';
        
        // If it's a video popup, play the video
        if (current.isVideo) {
            const video = currentEl.querySelector('.popup-video');
            if (video) {
                video.currentTime = 0;
                video.play().catch(e => console.log("Video play error:", e));
            }
        }
        
        currentPopupIndex = (currentPopupIndex + 1) % popups.length;
        clearInterval(popupInterval);
        popupInterval = setInterval(showNextPopup, current.interval);
    }
}

function hidePopup(popupId) {
    const el = document.getElementById(`popupOverlay${popupId}`);
    if (el) el.style.display = 'none';
    
    // Redémarrer le timer si on ferme le popup actuel
    const current = popups[currentPopupIndex - 1 < 0 ? popups.length - 1 : currentPopupIndex - 1];
    if (popupId === current.id) {
        clearInterval(popupInterval);
        popupInterval = setInterval(showNextPopup, popups[currentPopupIndex].interval);
    }
}

function initPopups() {
    popups.forEach(popup => {
        const overlay = document.getElementById(`popupOverlay${popup.id}`);
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) hidePopup(popup.id);
            });
        }
    });
    
    setTimeout(() => showNextPopup(), 3000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initPopups();
    
    // Vos autres fonctions d'initialisation...
});

window.addEventListener('beforeunload', function() {
    clearInterval(popupInterval);
});
function initVideoSection() {
    const video = document.querySelector('.video-section video');
    if (video) {
      // Forcer le redémarrage si la vidéo se bloque (souvent nécessaire sur mobile)
      video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play().catch(e => console.log("Erreur de lecture:", e));
      });
      
      // Démarrer la lecture dès que possible
      document.addEventListener('DOMContentLoaded', function() {
        video.play().catch(e => console.log("Lecture automatique bloquée:", e));
      });
    }
  }
  
  // Ajoutez cette fonction à votre initialisation
  document.addEventListener('DOMContentLoaded', function() {
    initVideoSection();
    // Vos autres initialisations...
  });
  function initVideoPopups() {
    // Preload video for better performance
    const video = document.createElement('video');
    video.src = 'promo-video.mp4';
    video.preload = 'auto';
    
    // Ensure videos restart when shown again
    document.querySelectorAll('.popup-video').forEach(video => {
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
    });
    function initVideoPopups() {
    // Preload video for better performance
    const video = document.createElement('video');
    video.src = 'promo-video.mp4';
    video.preload = 'auto';
    
    // Ensure videos restart when shown again
    document.querySelectorAll('.popup-video').forEach(video => {
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
    });
}

// Add to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initPopups();
    initVideoPopups();
    // ... other initializations
});
}

// Add to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initPopups();
    initVideoPopups();
    // ... other initializations
});
// Smooth scroll to forfait details
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Ajoutez Font Awesome pour l'icône WhatsApp dans le <head> de votre HTML
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(fa);
  }
  // Gestion de la modale vidéo
function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideoPlayer');
    
    videoPlayer.src = videoSrc;
    modal.style.display = 'flex';
    videoPlayer.play().catch(e => console.log("Autoplay blocked:", e));
  }
  
  function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideoPlayer');
    
    videoPlayer.pause();
    videoPlayer.src = '';
    modal.style.display = 'none';
  }
  
  // Fermer en cliquant à l'extérieur
  window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
      closeVideoModal();
    }
  }
  
  // Chargement progressif des vidéos
  document.getElementById('loadMoreVideos')?.addEventListener('click', function() {
    // Ici vous pouvez charger dynamiquement plus de vidéos via AJAX
    // ou afficher les éléments cachés
    console.log("Implémentez le chargement supplémentaire ici");
    
    // Exemple simple (à adapter):
    this.style.display = 'none'; // Cache le bouton après clic
  });
  // Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons and content
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Initialize first tab as active
  document.querySelector('.tab-btn').click();
// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<i class="bx bx-menu"></i>';
    
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    navbar.insertBefore(hamburger, logo.nextSibling);
  
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="bx bx-x"></i>' 
        : '<i class="bx bx-menu"></i>';
    });
  
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="bx bx-menu"></i>';
      });
    });
  });
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    }
function sendToWhatsApp() {
  // Get form values
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  
  // Validate form
  if (!name || !email || !subject || !message) {
    alert('Veuillez remplir tous les champs du formulaire');
    return;
  }
  
  // Format the message for WhatsApp
  const whatsappMessage = `Nouveau message de ${name} (${email})\n\nSujet: ${subject}\n\nMessage: ${message}`;
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  // Your WhatsApp number (replace with your actual number)
  const whatsappNumber = '237697691984'; // Example: remove the + and any spaces
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
  
  // Optional: Reset the form after submission
  document.getElementById('contactForm').reset();
}