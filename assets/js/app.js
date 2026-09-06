/**
 * MISIÓN HONOR — Application Controller
 * High-performance vanilla JS with interactive catalog, modal dossier and live mission card simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
  initFaq();
  initReviews();
  initSimulator();
  initMobileMenu();
  initModal();
});

let currentFilter = 'all';

function initCatalog() {
  const container = document.getElementById('catalog-grid');
  const filterButtons = document.querySelectorAll('[data-filter]');

  function renderProducts(filter = 'all') {
    if (!container) return;
    container.innerHTML = '';

    const filtered = PRODUCTS.filter(product => {
      if (filter === 'all') return true;
      return product.gender === filter;
    });

    filtered.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-id', product.id);

      // Build small tags for highlight items
      let itemsListHtml = '';
      if (product.highlightItems && product.highlightItems.length) {
        itemsListHtml = product.highlightItems.map(item => 
          `<span style="display: inline-block; font-size: 0.72rem; color: #b0bba0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); padding: 0.2rem 0.55rem; border-radius: 4px; margin-right: 0.35rem; margin-bottom: 0.35rem;">
            ${item}
          </span>`
        ).join('');
      }

      card.innerHTML = `
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name} — ${product.collectionName}" loading="lazy" />
          <div class="card-badge-top-left">
            <span class="pill-badge pill-badge-gold">${product.badge}</span>
          </div>
        </div>
        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
          <p style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.22em; color: var(--gold-400); font-weight: 700; margin-bottom: 0.35rem;">
            ${product.collectionName}
          </p>
          <h3 class="font-display" style="font-size: 1.35rem; color: #ffffff; font-weight: 800; line-height: 1.25; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
            ${product.name}
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1rem; flex-grow: 1;">
            ${product.tagline}
          </p>
          
          <div style="margin-bottom: 1rem;">
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--text-tertiary); font-weight: 700; margin-bottom: 0.45rem;">
              Incluye en esta misión:
            </p>
            <div style="display: flex; flex-wrap: wrap;">
              ${itemsListHtml}
            </div>
          </div>

          <div style="padding: 0.85rem 0; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-tertiary);">Precio Colombia:</span>
            <span class="font-display" style="font-size: 1.35rem; font-weight: 800; color: var(--gold-300); letter-spacing: 0.03em;">${product.price}</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem;">
            <a href="${getWhatsAppLink(`Hola MISIÓN HONOR, quiero ordenar la misión *${product.name}* (${product.collectionName}) de ${product.price}.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              Ordenar por WhatsApp
            </a>
            <button class="btn btn-outline-gold btn-sm btn-inspect" data-product-id="${product.id}">
              Ver contenido completo
            </button>
          </div>
        </div>
      `;

      // Allow clicking the card image to open the modal
      card.querySelector('.product-image-container').addEventListener('click', () => {
        openProductModal(product.id);
      });

      container.appendChild(card);
    });

    document.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-product-id');
        openProductModal(id);
      });
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => {
        b.classList.remove('active', 'btn-gold');
        b.classList.add('btn-outline-gold');
      });
      const target = e.currentTarget;
      target.classList.remove('btn-outline-gold');
      target.classList.add('active', 'btn-gold');
      currentFilter = target.getAttribute('data-filter');
      renderProducts(currentFilter);
    });
  });

  renderProducts('all');
}

function initModal() {
  const overlay = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const overlay = document.getElementById('product-modal');
  if (!product || !overlay) return;

  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-collection-name').textContent = product.collectionName;
  document.getElementById('modal-price').textContent = product.price;
  document.getElementById('modal-tagline').textContent = product.tagline;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-image').src = product.image;
  document.getElementById('modal-image').alt = product.name;
  document.getElementById('modal-badge').textContent = product.badge;

  const itemsContainer = document.getElementById('modal-includes-list');
  itemsContainer.innerHTML = '';

  product.includes.forEach((item, index) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '0.85rem';
    row.style.padding = '0.85rem';
    row.style.background = 'rgba(19, 27, 21, 0.5)';
    row.style.border = '1px solid rgba(255, 255, 255, 0.08)';
    row.style.borderRadius = '8px';
    row.style.alignItems = 'flex-start';

    row.innerHTML = `
      <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(197, 160, 89, 0.15); border: 1px solid rgba(197, 160, 89, 0.3); display: flex; align-items: center; justify-content: center; color: var(--gold-300); font-weight: 800; font-size: 0.75rem; flex-shrink: 0; margin-top: 1px;">
        ${index + 1}
      </div>
      <div>
        <h4 style="font-size: 0.9rem; font-weight: 700; color: #ffffff; margin-bottom: 0.2rem; letter-spacing: 0.03em;">
          ${item.name}
        </h4>
        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">
          ${item.detail}
        </p>
      </div>
    `;
    itemsContainer.appendChild(row);
  });

  const waBtn = document.getElementById('modal-whatsapp-btn');
  const customMessage = `Hola MISIÓN HONOR, estuve revisando el detalle de la misión *${product.name}* (${product.collectionName}) de ${product.price}. Quiero confirmar disponibilidad y coordinar la personalización de la tarjeta de honor.`;
  waBtn.href = getWhatsAppLink(customMessage);

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initSimulator() {
  const recipientInput = document.getElementById('sim-recipient');
  const occasionSelect = document.getElementById('sim-occasion');
  const messageInput = document.getElementById('sim-message');
  const senderInput = document.getElementById('sim-sender');

  const previewRecipient = document.getElementById('sim-preview-recipient');
  const previewOccasion = document.getElementById('sim-preview-occasion');
  const previewMessage = document.getElementById('sim-preview-message');
  const previewSender = document.getElementById('sim-preview-sender');
  const previewCode = document.getElementById('sim-preview-code');
  const sendBtn = document.getElementById('sim-send-btn');

  const randomNum = Math.floor(100 + Math.random() * 900);
  const missionCode = `DOC-MH-COL-${randomNum}`;
  if (previewCode) previewCode.textContent = missionCode;

  const defaultTemplates = {
    aniversario: "Por ser mi mayor victoria, mi refugio en cada batalla y la persona con quien elijo caminar toda la vida. Gracias por tu amor incondicional y por honrar cada día a mi lado.",
    cumpleanos: "Hoy celebramos la vida de una persona admirable, llena de valor, fortaleza y nobleza. Que este nuevo ciclo esté colmado de conquistas, salud y alegría infinita.",
    ascenso: "Tu disciplina inquebrantable, tu honor y tu liderazgo han rendido sus frutos. Este nuevo logro es testimonio de tu entrega impecable. ¡Firme en la victoria!",
    amor: "En este mundo de batallas diarias, tu compañía es mi mayor fortaleza y tu sonrisa mi mejor recompensa. Te amo con el alma.",
    agradecimiento: "Porque cuando todo parecía difícil estuviste en primera línea a mi lado. Gracias por tu lealtad, por tu apoyo incansable y por tu corazón generoso."
  };

  function updatePreview() {
    const recipient = recipientInput.value.trim() || "MI GUERRERA VALIENTE";
    const sender = senderInput.value.trim() || "CON AMOR Y ADMIRACIÓN ETERNA";
    const occasionText = occasionSelect.options[occasionSelect.selectedIndex].text;
    const message = messageInput.value.trim() || defaultTemplates[occasionSelect.value] || defaultTemplates.amor;

    if (previewRecipient) previewRecipient.textContent = recipient.toUpperCase();
    if (previewOccasion) previewOccasion.textContent = occasionText.toUpperCase();
    if (previewMessage) previewMessage.textContent = `"${message}"`;
    if (previewSender) previewSender.textContent = sender.toUpperCase();

    const fullOrderText = `Hola MISIÓN HONOR, quiero ordenar un kit con esta *ORDEN DE MISIÓN PERSONALIZADA*:\n\n🎖️ *Destinatario:* ${recipient}\n🎯 *Ocasión:* ${occasionText}\n✍️ *Mensaje de Honor:* "${message}"\n🎖️ *Firma:* ${sender}\n\n¿Qué misiones tienen disponibles para despachar con esta dedicatoria?`;
    if (sendBtn) sendBtn.href = getWhatsAppLink(fullOrderText);
  }

  if (occasionSelect) {
    occasionSelect.addEventListener('change', () => {
      const selected = occasionSelect.value;
      if (defaultTemplates[selected]) {
        messageInput.value = defaultTemplates[selected];
      }
      updatePreview();
    });
  }

  if (recipientInput) recipientInput.addEventListener('input', updatePreview);
  if (messageInput) messageInput.addEventListener('input', updatePreview);
  if (senderInput) senderInput.addEventListener('input', updatePreview);

  if (messageInput && !messageInput.value) {
    messageInput.value = defaultTemplates.aniversario;
  }
  updatePreview();
}

function initFaq() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = '';

  FAQS.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    if (index === 0) item.classList.add('active');

    item.innerHTML = `
      <button class="faq-trigger" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.question}</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-content">
        <div class="faq-content-inner">
          ${faq.answer}
        </div>
      </div>
    `;

    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        }
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    container.appendChild(item);
  });
}

function initReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = '';

  REVIEWS.forEach(review => {
    const card = document.createElement('div');
    card.style.background = 'var(--gradient-card)';
    card.style.border = '1px solid var(--border-subtle)';
    card.style.borderRadius = '12px';
    card.style.padding = '1.75rem';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '1rem';
    card.style.boxShadow = 'var(--shadow-md)';

    let starsHtml = '';
    for (let i = 0; i < review.stars; i++) {
      starsHtml += '<svg width="15" height="15" viewBox="0 0 24 24" fill="#dfbe76" stroke="#dfbe76" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    }

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div style="display: flex; gap: 3px; margin-bottom: 0.4rem;">
            ${starsHtml}
          </div>
          <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold-400); font-weight: 700;">
            ${review.kit}
          </span>
        </div>
        <span style="font-size: 0.7rem; color: var(--text-tertiary);">
          ${review.date}
        </span>
      </div>
      <p style="font-size: 0.9rem; color: #d6ded4; line-height: 1.6; font-style: italic; flex-grow: 1;">
        "${review.comment}"
      </p>
      <div style="display: flex; align-items: center; gap: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 0.85rem;">
        <div style="width: 34px; height: 34px; border-radius: 50%; background: #18241b; border: 1px solid var(--gold-500); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: var(--gold-300);">
          ${review.name.charAt(0)}
        </div>
        <div>
          <h5 style="font-size: 0.88rem; font-weight: 700; color: #ffffff;">${review.name}</h5>
          <span style="font-size: 0.72rem; color: var(--text-tertiary); display: flex; align-items: center; gap: 4px;">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${review.city} · Compra Verificada
          </span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}
