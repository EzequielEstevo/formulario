document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('success-msg');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Store original state
            const btnText = submitBtn.querySelector('span');
            const originalContent = btnText.textContent;
            
            // Set loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Enviando...';
            
            const loader = document.createElement('div');
            loader.className = 'loader';
            submitBtn.appendChild(loader);

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('pergunta').value
            };

            console.log('Enviando dados:', formData);

            // Simulation of API request
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success actions
                successMsg.style.display = 'block';
                contactForm.reset();
                
                // Reset button after brief delay
                setTimeout(() => {
                    successMsg.style.display = 'none';
                    submitBtn.disabled = false;
                    btnText.textContent = originalContent;
                    if (loader.parentNode) {
                        submitBtn.removeChild(loader);
                    }
                }, 3000);

            } catch (error) {
                console.error('Erro ao enviar:', error);
                btnText.textContent = 'Erro ao enviar';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    btnText.textContent = originalContent;
                    submitBtn.style.background = '';
                    if (loader.parentNode) {
                        submitBtn.removeChild(loader);
                    }
                }, 3000);
            }
        });
    }

    // Input interaction effects
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        // Add floating effect or validation styling on blur
        input.addEventListener('blur', () => {
            if (input.value.trim() !== '') {
                input.style.borderColor = 'rgba(99, 102, 241, 0.5)';
            } else {
                input.style.borderColor = '';
            }
        });
    });
});
