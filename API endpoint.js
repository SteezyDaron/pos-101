app.post('/buy-crypto', async (req, res) => {
    const { walletAddress, cryptoType, amount } = req.body;

    // Make sure to validate the inputs here (e.g., regex for wallet addresses)

    try {
        // Call your chosen payment gateway API here
        // For example:
        const apiResponse = await axios.post('https://api.paymentgateway.com/transaction', {
            walletAddress,
            cryptoType,
            amount,
            // Other required parameters
        });

        res.json({ message: 'Purchase successful!', data: apiResponse.data });
    } catch (error) {
        res.status(500).json({ message: 'Error processing transaction', error: error.message });
    }
});
