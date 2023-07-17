const searchForm = document.getElementById('searchForm');
const doctorCedula = document.getElementById('doctorCedula');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cedula = doctorCedula.value;
    const url = `/api/principal/doctors/${cedula}`;
    searchForm.action = url;
    searchForm.submit();
});

