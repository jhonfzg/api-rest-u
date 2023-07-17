const searchForm = document.getElementById('searchForm');
const pacienteCedula = document.getElementById('patientCedula');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cedula = pacienteCedula.value;
    const url = `/api/principal/pacientes/${cedula}`;
    searchForm.action = url;
    searchForm.submit();
});

