document.getElementById('cryptoForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const walletAddress = document.getElementById('walletAddress').value;
    const cryptoType = document.getElementById('cryptoType').value;
    const amount = document.getElementById('amount').value;

    try {
        const response = await fetch('/buy-crypto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ walletAddress, cryptoType, amount }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
    }
});
