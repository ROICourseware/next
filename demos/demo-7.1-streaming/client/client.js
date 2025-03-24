async function fetchReviewsStream() {
    const response = await fetch('http://localhost:3000/api/reviews');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        document.getElementById('reviews').innerText = result; // Display the chunk
    }

    console.log('Stream complete');
}

fetchReviewsStream();