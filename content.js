function createSideLabel() {
  const label = document.createElement('div');
  label.className = 'leve-side-label';
  
  const ia = document.createElement('div');
  ia.className = 'leve-side-label-ia';
  ia.textContent = 'IA';
  
  const text = document.createElement('span');
  text.className = 'leve-side-label-text';
  text.textContent = 'Leve';
  
  label.appendChild(ia);
  label.appendChild(text);
  
  return label;
}

function createInterface() {
  const interface = document.createElement('div');
  interface.className = 'leve-interface';
  
  interface.innerHTML = `
    <div class="leve-header">
      <div class="leve-header-top">
        <img src="https://i.imgur.com/YUwqWLJ.png" alt="Leve" style="height: 32px;">
        <button class="leve-close">✕</button>
      </div>
      
      <nav class="leve-nav">
        <button class="leve-nav-button active" data-tab="historia">História Clínica</button>
        <button class="leve-nav-button" data-tab="hipoteses">Hipóteses</button>
        <button class="leve-nav-button" data-tab="protocolos">Protocolos</button>
      </nav>
    </div>

    <div class="leve-content">
      <div class="leve-section">
        <h2 class="leve-section-title">Gravar consulta</h2>
        <p class="leve-section-desc">
          Grave a consulta completa e deixe que a AI gere as notas para o seu prontuário.
        </p>
        <div class="leve-buttons">
          <button class="leve-button leve-button-primary" id="record-button">
            <span class="icon">🎤</span>
            Gravar consulta
          </button>
          <button class="leve-button">
            <span class="icon">⬆️</span>
            Upload de exames
          </button>
        </div>
      </div>

      <div class="leve-transcription">
        <h3 class="leve-section-title" style="font-size: 14px;">Transcrição da consulta</h3>
        <div class="leve-transcription-content"></div>
      </div>

      <button class="leve-generate-button">
        <span class="icon">✨</span>
        Gerar hipóteses
      </button>
    </div>

    <div class="leve-footer">
      <a href="https://medhy.com.br" target="_blank" rel="noopener noreferrer">
        Powered by Medhy
      </a>
    </div>
  `;
  
  return interface;
}

async function requestMicrophoneAccess() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // Stop the stream immediately after getting permission
    stream.getTracks().forEach(track => track.stop());
    return true;
  } catch (err) {
    console.error('Error accessing microphone:', err);
    return false;
  }
}

function initializeExtension() {
  if (window.location.hostname !== 'www.google.com.br') return;

  const container = document.createElement('div');
  container.id = 'leve-extension';
  document.body.appendChild(container);

  const sideLabel = createSideLabel();
  const interface = createInterface();
  
  container.appendChild(sideLabel);
  container.appendChild(interface);

  // Event Listeners
  sideLabel.addEventListener('click', () => {
    interface.classList.add('open');
  });

  const closeButton = interface.querySelector('.leve-close');
  closeButton.addEventListener('click', () => {
    interface.classList.remove('open');
  });

  const recordButton = interface.querySelector('#record-button');
  recordButton.addEventListener('click', async () => {
    const hasAccess = await requestMicrophoneAccess();
    if (hasAccess) {
      recordButton.classList.add('recording');
      recordButton.innerHTML = `
        <span class="icon">⏺</span>
        Gravando...
      `;
    } else {
      alert('É necessário permitir acesso ao microfone para gravar a consulta.');
    }
  });

  const navButtons = interface.querySelectorAll('.leve-nav-button');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

initializeExtension();