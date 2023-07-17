const searchAllForm = document.getElementById('searchAllForm');
const citaCedula = document.getElementById('citasCedula');

searchAllForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cedula = citaCedula.value;
    const url = `/api/v1/citas/cedula/${cedula}`;
    searchForm.action = url;
    searchForm.submit();
});


