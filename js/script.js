/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


// function to show 9 students per page. Fetch the data from teh data.js file.


function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list')
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
       
         const student = list[i]; 
         let html = `
         <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${student.picture.large} alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
          </div>
        </li>
         `;

         studentList.insertAdjacentHTML('beforeend', html);
      }

   }
}; 



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// create buttons based on each page of students. 

function addPagination(data) {

   const numOfPages = Math.ceil(data.length / 9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';

   for(let i = 1; i <= numOfPages; i++) {

      let button = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
      const activate = document.querySelector('button');
      activate.className = 'active';
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName === 'BUTTON') {

               const deactivate = document.querySelector('.active');
               deactivate.className = '';
               e.target.className = 'active'; 
               showPage(data, e.target.textContent);
      }
   });

};


};



// Call functions
addPagination(data);
showPage(data, 1);