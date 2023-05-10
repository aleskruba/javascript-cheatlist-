import {teachers} from './teachers.js';

const itemList = document.querySelector('.main');

function sortAndFilter(teachers, options) {

    if (options.sortBy) {
      teachers.sort((a, b) => {
        if (a[options.sortBy] < b[options.sortBy]) {
          return options.sortOrder === 'asc' ? -1 : 1;
        }
        if (a[options.sortBy] > b[options.sortBy]) {
          return options.sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return teachers;
  }

  const teachersPerPage = 5;
  let currentPage = 1;
  
function renderPagination() {
  const paginationContainer = document.querySelector('.pagination');
  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  let paginationHTML = '<nav><ul class="pagination-list">';

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<li class="pagination-item ${currentPage === i ? 'active' : ''}"><a class="pagination-link" href="#">${i}</a></li>`;
  }

  paginationHTML += '</ul></nav>';

  paginationContainer.innerHTML = paginationHTML;

  const pageLinks = paginationContainer.querySelectorAll('.pagination-link');

  pageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const newPage = parseInt(e.target.textContent);
      currentPage = newPage;

      renderteachers();
      renderPagination();
    });
  });
}



  function renderteachers(items) {
    itemList.innerHTML = '';
  
    const startIndex = (currentPage - 1) * teachersPerPage;
    const endIndex = startIndex + teachersPerPage;
    const currentTeachers = teachers.slice(startIndex, endIndex);
  
    currentTeachers.forEach((teacher) => {
      const teacherCardHTML = `
        <div class="teacher-card">
          <img class="teacher-image" src="${teacher.image}" alt="Teacher Image">
          <div class="teacher-info">
            <h2 class="teacher-name">${teacher.lastName} ${teacher.firstName} </h2>
            <p class="teacher-dob">DOB: ${teacher.dob}</p>
            <p class="teacher-price">Price: $${teacher.price}</p>
            <p class="teacher-language">Language: ${teacher.language}</p>
          </div>
        </div>
      `;
      const li = document.createElement('li');
      li.classList.add('liTeacherCard');
      li.innerHTML = teacherCardHTML;
      itemList.appendChild(li);
    });
  }
  
const sortOrderMap = {
    asc: 'desc',
    desc: 'asc',
};

    document.getElementById('sort-by-name').addEventListener('click', () => {
    const sortOrder = sortOrderMap[itemList.dataset.sortOrder] || 'asc';
    itemList.dataset.sortOrder = sortOrder;
    const result = sortAndFilter(teachers, { sortBy: 'lastName', sortOrder });
    renderteachers(result);
    });

    document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortOrder = sortOrderMap[itemList.dataset.sortOrder] || 'asc';
    itemList.dataset.sortOrder = sortOrder;
    const result = sortAndFilter(teachers, { sortBy: 'price', sortOrder });
    renderteachers(result);
    });

    document.getElementById('sort-by-language').addEventListener('click', () => {
    const sortOrder = sortOrderMap[itemList.dataset.sortOrder] || 'asc';
    itemList.dataset.sortOrder = sortOrder;
    const result = sortAndFilter(teachers, { sortBy: 'language', sortOrder });
    renderteachers(result);
    });

 
  // initial rendering
  renderteachers(teachers);
  renderPagination();
