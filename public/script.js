document.getElementById('slaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sla = formData.get('sla');
    const period = formData.get('period');
    
    fetch('/api/sla', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sla, period }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
});