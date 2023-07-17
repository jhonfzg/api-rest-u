const searchForm = document.getElementById('searchForm');
const citaId = document.getElementById('citaId');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cita = citaId.value;
    const url = `/api/principal/citas/${cita}`;
    searchForm.action = url;
    searchForm.submit();
});

