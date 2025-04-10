document.getElementById('convertBtn').addEventListener('click', function () {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const amount = parseFloat(document.getElementById('amount').value);

  fetch('https://mvbakeys.pythonanywhere.com/convert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: from,
      to: to,
      amount: amount
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data && data.result) {
      document.getElementById('result').innerText = `${amount} ${from} = ${data.result} ${to}`;
    } else {
      document.getElementById('result').innerText = 'Error converting currency.';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('result').innerText = 'Error converting currency.';
  });
});
Created script.js with API call
