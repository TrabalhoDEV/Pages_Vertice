let deletingCard = null;
let currentCard = null;

//    DELETE OBS MODAL

document.addEventListener("click", function(e) {
  const deleteBtn = e.target.closest(".delete-btn");
  
  if (deleteBtn) {
    e.preventDefault();
    e.stopPropagation(); 
    deletingCard = deleteBtn.closest(".observation-card");
    const deleteModal = document.getElementById("deleteModal");
    if (deleteModal) {
        deleteModal.style.display = "flex";
    }
  }
});

function closeDeleteModal() {
  const deleteModal = document.getElementById("deleteModal");
  if (deleteModal) {
      deleteModal.style.display = "none";
  }
  deletingCard = null;
}

function confirmDelete() {
  if (deletingCard) {
    deletingCard.remove(); 
  }
  closeDeleteModal();
}

//    EDIT OBS MODAL

function openEditModal(buttonElement) {
  currentCard = buttonElement.closest('.observation-card');
  
  if (currentCard) {
      const titleEl = currentCard.querySelector('.observation-title');
      const descEl = currentCard.querySelector('.observation-description');
      const currentTitle = titleEl ? titleEl.innerText : '';
      const currentText = descEl ? descEl.innerText : '';
      const inputTitle = document.getElementById('editObservationTitle');
      const inputText = document.getElementById('editObservationText');
      if (inputTitle) inputTitle.value = currentTitle;
      if (inputText) inputText.value = currentText;
      const editModal = document.getElementById('editModal');
      if (editModal) {
          editModal.style.display = 'flex';
          if(inputText) inputText.focus();
      }
  }
}

function closeEditModal() {
  const editModal = document.getElementById('editModal');
  if (editModal) {
      editModal.style.display = 'none';
  }
  currentCard = null;
}

function saveEdit() {
  if (currentCard) {
      const newTitle = document.getElementById('editObservationTitle').value;
      const newText = document.getElementById('editObservationText').value;
      const titleEl = currentCard.querySelector('.observation-title');
      const descEl = currentCard.querySelector('.observation-description');
      if (titleEl) titleEl.innerText = newTitle;
      if (descEl) descEl.innerText = newText;
      closeEditModal();
  }
}

//    PAGINATION

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.observation-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const currentPageSpan = document.querySelector('.current-page');
  const totalPagesSpan = document.querySelector('.total-pages');

  const cardsPerPage = 6;
  let currentPage = 1;

  const totalPages = Math.ceil(cards.length / cardsPerPage) || 1; 

  function renderPage() {
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none';
      }
    });
  }
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  });
  renderPage();
});